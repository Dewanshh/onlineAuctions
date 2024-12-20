import React from 'react';
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';

function AdminDashboard() {
  const navigate = useNavigate();
  
  const adminOptions = [
    { name: "Add Customer", path: "/customerRegister" },
    { name: "Add Product", path: "/productForm" },
    { name: "Add Seller", path: "/sellerRegister" },
    { name: "Customer Report", path: "/customerReport" },
    { name: "Product Bid Report", path: "/productBidReport" },
    { name: "Change Password", path: "/changePassword" },
    { name: "Product Report", path: "/productReport" },
  ];

  return (
    <Layout>
      <div className="my-8 px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
          <p className="text-lg text-gray-600">Welcome to Online Auction System</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-lg shadow-lg hover:cursor-pointer transition-all transform hover:scale-105"
            >
              <p className="text-xl font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        <div
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white p-6 rounded-lg shadow-lg mt-8 mx-auto w-full sm:w-1/2 lg:w-1/4 text-center cursor-pointer transition-all transform hover:scale-105"
        >
          Logout
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
