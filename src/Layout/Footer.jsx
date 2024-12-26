import React from 'react';

function Footer() {
  return (
    <div className="bg-teal-500 text-white">
      <div className="flex justify-between items-center p-4 border-t-2 border-teal-400">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">Team 2</h2>
          <p className="text-sm text-teal-100">Online Auction System</p>
        </div>
        
        {/* Right Section */}
        <div className="flex space-x-6">
          <p className="hover:text-teal-200 cursor-pointer transition-colors">Shiwani</p>
          <p className="hover:text-teal-200 cursor-pointer transition-colors">Vignay</p>
          <p className="hover:text-teal-200 cursor-pointer transition-colors">Rajat Rao</p>
          <p className="hover:text-teal-200 cursor-pointer transition-colors">Vishesh Bansal</p>
          <p className="hover:text-teal-200 cursor-pointer transition-colors">Dewansh Jangir</p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
