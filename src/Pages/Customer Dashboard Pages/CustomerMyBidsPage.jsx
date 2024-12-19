import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import api from '../../utils/apiUtils';

function CustomerMyBidsPage() {
  const [customer,setCustomer]=useState(null);
  const [productIds,setProductIds]=useState([]);
  const [products,setProducts]=useState([]);
  const fetchCustomer=async ()=>{
    const customerEmail=localStorage.getItem('userEmail');
    try{
      const customer =await api.get(`/customers/${customerEmail}`).then((res)=>res.data);
      // console.log(customer);
      if(customer)
      {
        setCustomer(customer);
        const convertedIds=customer.customerBids?JSON.parse(customer.customerBids):[];
        setProductIds(convertedIds);
      }
    }catch(e){
      console.log(e);
    }
  }
  const fetchProducts=async ()=>{
    // console.log(productIds);
    try{
      if(productIds&&productIds.length>0)
        {
          const products=await Promise.all(
            productIds.map(async (id)=>{
              const product=await api.get(`/products/${id}`).then((res)=>res.data);
              return product;
            })
          )

          setProducts(products);
        }
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
    fetchCustomer();
  },[])
  useEffect(()=>{
    fetchProducts();
  },[productIds])


  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Product Bid Report</h2>
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
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
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

export default CustomerMyBidsPage