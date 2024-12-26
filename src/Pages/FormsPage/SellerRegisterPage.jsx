import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function SellerRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contactNumber: '',
    city: '',
    state: '',
    country: '',
    address: '',
    description: '',
  });
  
  const [error, setError] = useState(null); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.email || !formData.name || !formData.contactNumber || !formData.city || !formData.state || !formData.country || !formData.address || !formData.description) {
      setError('All fields are required');
      return;
    }

    setError(null);

    try {
      const response = await api.post('/sellers/createSeller', formData);
      navigate('/adminDashboard');
    } catch (e) {
      console.error("Error creating seller:", e);
      setError('Failed to register the seller. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen py-8'>
        <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Seller Registration</h2>
          
          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

              <div className='flex flex-col'>
                <label htmlFor="email" className='text-gray-700'>Seller Email</label>
                <input
                  id="email"
                  name="email"
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="name" className='text-gray-700'>Seller Name</label>
                <input
                  id="name"
                  name="name"
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="contactNumber" className='text-gray-700'>Contact Number</label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type='text'
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="city" className='text-gray-700'>City</label>
                <input
                  id="city"
                  name="city"
                  type='text'
                  value={formData.city}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="state" className='text-gray-700'>State</label>
                <input
                  id="state"
                  name="state"
                  type='text'
                  value={formData.state}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="country" className='text-gray-700'>Country</label>
                <input
                  id="country"
                  name="country"
                  type='text'
                  value={formData.country}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="address" className='text-gray-700'>Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="description" className='text-gray-700'>Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className='p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
            </div>

            <div className='flex justify-center mt-6'>
              <button
                type="submit"
                className='px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300'
              >
                Save Seller
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SellerRegisterPage;
