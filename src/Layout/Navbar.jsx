import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoleFromToken, logout } from '../utils/auth';

function Navbar() {
  const navigate = useNavigate();
  const role = getRoleFromToken();
  const token = localStorage.getItem('token');

  return (
    <div className="bg-teal-500 text-white">

      <div className="flex justify-between items-center p-4 border-b-2 border-teal-400">
        <div>
          <h2 className="text-2xl font-bold">Online Auction System</h2>
          <p className="text-sm text-teal-100">A complete solution for managing online auctions</p>
        </div>


        <div className="flex space-x-6">
          <p
            className="hover:text-teal-200 cursor-pointer transition-colors"
            onClick={() => navigate('/')}
          >
            Home
          </p>
          {role === 'admin' && (
            <p
              className="hover:text-teal-200 cursor-pointer transition-colors"
              onClick={() => navigate('/adminDashboard')}
            >
              Admin Dashboard
            </p>
          )}
          {role === 'customer' && (
            <p
              className="hover:text-teal-200 cursor-pointer transition-colors"
              onClick={() => navigate('/customerDashboard')}
            >
              Customer Dashboard
            </p>
          )}
          <p
            className="hover:text-teal-200 cursor-pointer transition-colors"
            onClick={() => navigate('/auctions')}
          >
            Auctions
          </p>
          {token ? (
            <p
              className="hover:text-teal-200 cursor-pointer transition-colors"
              onClick={() => {
                logout();
                navigate('/loginOptions');
              }}
            >
              Logout
            </p>
          ) : (
            <p
              className="hover:text-teal-200 cursor-pointer transition-colors"
             onClick={()=>{logout();
                         navigate('/loginOptions')
             
                       }}
            >
              Login
            </p>
          )}
        </div>
      </div>

    </div>
  );
}

export default Navbar;
