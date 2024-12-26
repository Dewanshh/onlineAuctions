import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function CustomerRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    customerPassword: '',
    customerCity: '',
    customerState: '',
    customerCountry: '',
    customerAddress: '',
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.customerPassword) newErrors.customerPassword = "Password is required.";
    if (!formData.customerCity) newErrors.customerCity = "City is required.";
    if (!formData.customerState) newErrors.customerState = "State is required.";
    if (!formData.customerCountry) newErrors.customerCountry = "Country is required.";
    if (!formData.customerAddress) newErrors.customerAddress = "Address is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) return;

    try {
      const response = await api.post('/auth/registerCustomer', {
        email: formData.email,
        password: formData.customerPassword,
        name: formData.name,
        mobile: formData.mobileNumber,
        role: 'customer',
        customerCity: formData.customerCity,
        customerAddress: formData.customerAddress,
        customerCountry: formData.customerCountry,
        customerState: formData.customerState,
      });
      navigate('/adminDashboard');
    } catch (e) {
      console.log('Error during registration:', e);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Customer Registration Form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="text-xl font-medium text-gray-700 mb-4">Personal Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="mobileNumber" className="text-gray-600 mb-2">Mobile</label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xl font-medium text-gray-700 mb-4">Login Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="customerPassword" className="text-gray-600 mb-2">Password</label>
                  <input
                    id="customerPassword"
                    name="customerPassword"
                    type="password"
                    value={formData.customerPassword}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.customerPassword && <p className="text-red-500 text-sm">{errors.customerPassword}</p>}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xl font-medium text-gray-700 mb-4">Address Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="customerCity" className="text-gray-600 mb-2">City</label>
                  <input
                    id="customerCity"
                    name="customerCity"
                    type="text"
                    value={formData.customerCity}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.customerCity && <p className="text-red-500 text-sm">{errors.customerCity}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="customerState" className="text-gray-600 mb-2">State</label>
                  <input
                    id="customerState"
                    name="customerState"
                    type="text"
                    value={formData.customerState}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.customerState && <p className="text-red-500 text-sm">{errors.customerState}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="customerCountry" className="text-gray-600 mb-2">Country</label>
                  <input
                    id="customerCountry"
                    name="customerCountry"
                    type="text"
                    value={formData.customerCountry}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.customerCountry && <p className="text-red-500 text-sm">{errors.customerCountry}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="customerAddress" className="text-gray-600 mb-2">Address</label>
                  <textarea
                    id="customerAddress"
                    name="customerAddress"
                    value={formData.customerAddress}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.customerAddress && <p className="text-red-500 text-sm">{errors.customerAddress}</p>}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
              >
                Save Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CustomerRegisterPage;
