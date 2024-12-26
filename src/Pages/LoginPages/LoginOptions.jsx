import React from 'react';
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';

function LoginOptions() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Login to Your Account</h2>
          <p className="text-sm text-gray-500 mb-6">Select your login type to proceed</p>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/loginA')}
              className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Admin Login
            </button>
            <button
              onClick={() => navigate('/loginC')}
              className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Customer Login
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginOptions;
