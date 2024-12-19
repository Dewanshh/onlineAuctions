import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function SellerRegisterPage() {
    const navaigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contactNumber: '',
    city: '',
    state: '',
    country: '',
    address: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/sellers/createSeller', formData);
        navaigate('/adminDashboard')
    } catch (e) {
      console.error("Error creating seller:", e);
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <Layout>
      <div className='bg-red-200 h-screen'>
        <form onSubmit={handleSubmit}>
          <div>
            <p className='m-4'>Seller Login Details</p>
            <div className='flex flex-wrap'>
              <div className='flex flex-col m-4'>
                <label>Seller Email</label>
                <input
                  className='w-full'
                  name="email"
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className='w-3/4'>
            <p className='m-4'>Seller Details</p>
            <div className='flex flex-wrap'>
              <div className='flex flex-col m-4'>
                <label>Seller Name</label>
                <input
                  className='w-full'
                  name="name"
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller Contact Number</label>
                <input
                  className='w-full'
                  name="contactNumber"
                  type='text'
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller City</label>
                <input
                  className='w-full'
                  name="city"
                  type='text'
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller State</label>
                <input
                  className='w-full'
                  name="state"
                  type='text'
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller Country</label>
                <input
                  className='w-full'
                  name="country"
                  type='text'
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller Address</label>
                <textarea
                  className='w-full'
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col m-4'>
                <label>Seller Description</label>
                <textarea
                  className='w-full'
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='p-4 m-4 bg-orange-300 w-fit text-white hover:cursor-pointer'>
              <button type="submit">Save Seller</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default SellerRegisterPage;
