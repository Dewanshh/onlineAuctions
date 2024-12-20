import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import api from '../../utils/apiUtils';

function ProductBidReport() {

  const [products,setProducts]=useState([]);


  const fetchProducts=async ()=>{
    try{
              const product=await api.get(`/products/all`).then((res)=>res.data);
              setProducts(product);
    }
    catch(e){
      console.log(e);
    }
  }
  const getImageUrl = (imageData) => {
    if (imageData && imageData.data) {
      const blob = new Blob([new Uint8Array(imageData.data)], {
        type: "image/jpeg",
      });
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
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Product Bid Report</h2>
      <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Id</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Image</th>
                
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Winner Name</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Type</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Date</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Bid Amount</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Status</th>


              </tr>
            </thead>
            <tbody>

            {products&&products.map((item,index)=>(<tr key={index} className="bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{item?.id}</td>
                <td className="px-4 py-2 border border-gray-300"><div className="h-32 w-52 min-w-52 max-w-52 max-h-52 bg-red-400">
              {item?.productImage ? (
                <img
                  src={getImageUrl(item?.productImage)}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              ) : (
                "Loading..."
              )}
            </div></td>
                <td className="px-4 py-2 border border-gray-300">{item?.winner?<p>{item?.winner?.userEmail}</p>:<p>To Be Declared</p>}</td>
                <td className="px-4 py-2 border border-gray-300">{item.title}</td>
                <td className="px-4 py-2 border border-gray-300">{item.productType}</td>
                <td className="px-4 py-2 border border-gray-300">{formatDate(item?.bidStartDate)}</td>
                <td className="px-4 py-2 border border-gray-300">{item?.minimumBid}</td>
                <td className={`px-4 py-2 h-16 w-full ${item?.winner?'bg-green-600':'bg-orange-600'} text-center text-white border border-gray-300`}>{item?.winner?<p>Accepted</p>:<p>Auction Ongoing</p>}</td>
              </tr>))}
            
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default ProductBidReport