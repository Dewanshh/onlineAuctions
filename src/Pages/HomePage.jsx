import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { getRoleFromToken } from "../utils/auth";
import api from "../utils/apiUtils";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const product = await api.get(`/products/all`).then((res) => res.data);
      const upcomingAndOngoingAuctions = product.filter((item) => item.winner === null);
      setProducts(upcomingAndOngoingAuctions);
    } catch (e) {
      console.log(e);
    }
  };

  const getImageUrl = (imageData) => {
    if (imageData && imageData.data) {
      const blob = new Blob([new Uint8Array(imageData.data)], { type: "image/jpeg" });
      return URL.createObjectURL(blob);
    }
    return null;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">

        <div className="relative w-full h-72 bg-gray-300 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/968390674/vector/buyers-hands-raising-auction-bid-paddles-with-numbers-of-competitive-price-auction-business.jpg?s=612x612&w=0&k=20&c=8ilTaKR8qk7naPN6vFZns9uYTSLoXru82f--QZzNMkU="
            alt="Auction Banner"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-2xl bg-opacity-50 bg-black p-2 rounded-md">
            Upcoming and Ongoing Auctions
          </div>
        </div>


        <div className="container mx-auto p-6">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-gray-800">
              {products.length} Upcoming and Ongoing Auctions
            </p>
            <p className="text-lg text-gray-600">Find the best products available for bidding</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.length > 0 &&
              products.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/listing/${item.id}`)}
                  className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    {item.productImage ? (
                      <img
                        src={getImageUrl(item.productImage)}
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-600">
                        Image Not Found
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-xl text-gray-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.productDescription}</p>
                  </div>
                </div>
              ))}
          </div>


          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/auctions")}
              className="bg-orange-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-orange-600 transition-colors"
            >
              See More Auctions
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
