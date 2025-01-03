import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function ProductReportScreen() {
  const [productList, setProductList] = useState([]);
  const navigate=useNavigate();

  const fetchProductData = async () => {
    try {
      const data = await api.get('/products/all').then(res => res.data);
      setProductList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const getImageUrl = (imageData) => {
    if (imageData && imageData.data) {
      const blob = new Blob([new Uint8Array(imageData.data)], { type: 'image/jpeg' });
      return URL.createObjectURL(blob);
    }
    return null;
  };

  const deleteProduct=async (id)=>{
    try{

      const response=await api.delete(`/products/${id}`).then(res=>res.data);
      fetchProductData();
      alert(response);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Product Report</h2>
      <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Id</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Image</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Seller</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Title</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Minimum Bid</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Type</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className='h-52 w-full'>

                      {item.productImage ? (
                        <img
                          src={getImageUrl(item.productImage)}
                          alt="Product"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="bg-gray-200 h-full w-full">Image Not Found</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{item.sellerName}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.title}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.minimumBid}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.productType}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className='flex items-center justify-center space-x-4'>

                    <button onClick={()=>navigate(`/listing/${item.id}`)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                    <button onClick={()=>deleteProduct(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default ProductReportScreen;
