import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import api from "../../utils/apiUtils";
import { useParams } from "react-router-dom";

function AuctioningProductDescriptionPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState("");
  const [bidStartDate, setBidStartDate] = useState(null);
  const [auctionEndTime, setAuctionEndTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isBidClosed, setIsBidClosed] = useState(false);
  const [isBidNotStarted, setIsBidNotStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const token = localStorage.getItem("token");
  const role=localStorage.getItem("role");
  // console.log(role);


  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
      const bidStartDate = response.data.bidStartDate;
      const auctionEndTime = new Date(bidStartDate);
      auctionEndTime.setHours(auctionEndTime.getHours() + 1); 

      setBidStartDate(bidStartDate);
      setAuctionEndTime(auctionEndTime);
    } catch (e) {
      console.error("Error fetching product:", e);
    } finally {
      setLoading(false);
    }
  };


  const fetchBids = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/bids/${id}`);
      setBids(response.data);
    } catch (e) {
      console.error("Error fetching bids:", e);
    } finally {
      setLoading(false);
    }
  };


  const placeBid = async () => {
    if (!bidAmount || bidAmount <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }
    try {
      const email = localStorage.getItem("userEmail");
      const response = await api.post(
        "/bids",
        {
          productId: id,
          bidAmount: Number(bidAmount),
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Bid placed successfully!");
      setBidAmount(""); 
      fetchBids(); 
    } catch (e) {
      console.error("Error placing bid:", e);
      alert(e.response?.data?.message || "Error placing bid.");
    }
  };


  const getImageUrl = (imageData) => {
    if (imageData && imageData.data) {
      const blob = new Blob([new Uint8Array(imageData.data)], { type: "image/jpeg" });
      return URL.createObjectURL(blob);
    }
    return null;
  };


  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };


  const calculateTimeRemaining = () => {
    const now = new Date();
    if (auctionEndTime) {
      const remainingTime = auctionEndTime - now;
      if (remainingTime <= 0) {
        setIsBidClosed(true);
        setTimeRemaining(null);
      } else {
        setIsBidClosed(false);
        setTimeRemaining(remainingTime);
      }
    }
  };


  const checkIfBidStarted = () => {
    const now = new Date();
    if (bidStartDate) {
      const bidStart = new Date(bidStartDate);
      if (now < bidStart) {
        setIsBidNotStarted(true);
      } else {
        setIsBidNotStarted(false);
      }
    }
  };


  const getHighestBid = () => {
    if (bids.length > 0) {
      return bids.reduce((maxBid, bid) => (bid.bidAmount > maxBid ? bid.bidAmount : maxBid), 0);
    }
    return 0;
  };


  useEffect(() => {
    fetchProduct();
    fetchBids();
  }, [id]);


  useEffect(() => {
    if (product?.productImage) {
      setImage(getImageUrl(product.productImage));
    }

    const intervalId = setInterval(() => {
      calculateTimeRemaining();
      checkIfBidStarted();
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [product, bidStartDate, auctionEndTime]);


  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Layout>
      <div className="p-8 bg-white my-4 min-h-screen">
        <div>
          <p className="border-b-[1px] pb-2 font-medium text-xl">
            Product Title: {product?.title}
          </p>
          <div className="flex items-start space-x-4 my-4">
            <div className="h-52 w-52 min-w-52 max-w-52 max-h-52 bg-red-400">
              {image ? (
                <img
                  src={image}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              ) : (
                "Loading..."
              )}
            </div>
            <div>
              <p className="underline">Seller: {product?.sellerName}</p>
              <p>Product Description: {product?.productDescription}</p>
            </div>
          </div>
          <div className="my-2">
            <table className="w-full border-[1px]">
              <tbody>
                <tr>
                  <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                    Product Type
                  </th>
                  <td className="bg-gray-400 p-2">{product?.productType}</td>
                </tr>
                <tr>
                  <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                    Product City
                  </th>
                  <td className="bg-white p-2">{product?.city}</td>
                </tr>
                <tr>
                  <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                    Bid Start Date
                  </th>
                  <td className="bg-gray-400 p-2">
                    {formatDate(product?.createdAt)}
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                    Minimum Bid
                  </th>
                  <td className="bg-white p-2">{product?.minimumBid}</td>
                </tr>
                <tr>
                  <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                    Highest Bid
                  </th>
                  <td className="bg-gray-400 p-2">
                    Rs. {getHighestBid()}
                  </td>
                </tr>
                {product?.winner && (
                  <tr>
                    <th className="bg-gray-600 text-white p-2 border-b-[1px]">
                      Bid Winner!
                    </th>
                    <td className="bg-white p-2">
                      <p>Email: {product?.winner?.userEmail}</p>
                      <p>Highest Bid: Rs. {product?.winner?.bidAmount}</p>  
                  </td>
                  </tr>

                )}
              </tbody>
            </table>
          </div>
          {role==="admin"?<p className="text-red-600 p-2 text-xl">Admin Can't Bid</p>
              :<div className="my-4">
            {isBidNotStarted ? (
              <p className="text-blue-600 p-2">Bid Not Started Yet</p>
            ) : isBidClosed ? (
              <p className="text-red-600 p-2 text-xl">Bid is Closed</p>
            ) : (
              <div>
                <p className="text-lg">Time Remaining: {formatTime(timeRemaining)}</p>
                {token ? (
                  <div>
                    <input
                      className="p-2 border"
                      type="number"
                      placeholder="Enter Bid Amount"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                    />
                    <button
                      className="p-2 bg-orange-600 text-white ml-2"
                      onClick={placeBid}
                    >
                      Place Bid
                    </button>
                  </div>
                ) : (
                  <p className="text-orange-600">Login to place a bid</p>
                )}
              </div>
            )}
          </div>}
          <div>
            {isBidClosed ? (
              <p className="text-2xl font-medium border-b-2 p-2">Bid History:</p>
            ) : (
              <p className="text-2xl font-medium border-b-2 p-2">Biddings:</p>
            )}
            <div className="p-2">
              {bids.length > 0 ? (
                bids.map((item, index) => (
                  <div key={index} className="w-full border-[2px] my-2 p-2">
                    <p className="my-2 text-xl">
                      Bid: <span className="text-green-600 ml-2">Rs. {item.bidAmount}</span>
                    </p>
                    <div className="my-2 flex justify-between">
                      <p>User: {item.userEmail}</p>
                      <p>Bidded On: {formatDate(item.createdAt)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="h-1/2 w-full text-xl text-red-600">No One Bidded</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuctioningProductDescriptionPage;
