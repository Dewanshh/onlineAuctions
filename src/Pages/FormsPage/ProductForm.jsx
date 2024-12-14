import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    sellerName: '',
    city: '',
    minimumBid: '',
    bidStartDate: '',
    productType: '',
    productImage: null,  // For file input, use null initially
    productDescription: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
  

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result.split(',')[1];  
      setFormData((prevData) => ({
        ...prevData,
        [name]: base64Image,  
      }));
    };
    
    reader.readAsDataURL(file);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    const response=await api.post('/products/create',{
        title:formData.title,
        sellerName:formData.sellerName,
        city:formData.city,
        minimumBid:formData.minimumBid,
        bidStartDate:formData.bidStartDate,
        productType:formData.productType,
        productImage:formData.productImage,
        productDescription:formData.productDescription
    });
    console.log(response.data);
    navigate('/adminDashboard')
  };

  return (
    <Layout>
      <div className="bg-red-200 h-screen">
        <p className="m-4">Product Form</p>
        <form >
          <div className="flex flex-wrap">
            <div className="flex flex-col m-4">
              <label>Product Title</label>
              <input
                className="w-full"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4">
              <label>Seller Name</label>
              <input
                className="w-full"
                name="sellerName"
                type="text"
                value={formData.sellerName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4">
              <label>Product City</label>
              <input
                className="w-full"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4">
              <label>Minimum Bid</label>
              <input
                className="w-full"
                name="minimumBid"
                type="text"
                value={formData.minimumBid}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4">
              <label>Bid Start Date</label>
              <input
                className="w-full"
                name="bidStartDate"
                type="datetime-local"
                value={formData.bidStartDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4">
              <label>Product Type</label>
              <input
                className="w-full"
                name="productType"
                type="text"
                value={formData.productType}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col m-4 w-3/4">
              <label>Product Image</label>
              <input
                className="w-full"
                name="productImage"
                type="file"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col m-4 w-1/2">
              <label>Product Description</label>
              <textarea
                className="w-full"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="m-4 p-2 bg-orange-400 w-fit text-white rounded-xl">
            <button onClick={handleSubmit} >Save Product</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ProductForm;
