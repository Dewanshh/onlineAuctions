import React from 'react'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='bg-teal-200'>
      <div className='flex flex-row justify-end space-x-4 p-2 hover:cursor-pointer'>
        <p onClick={()=>navigate('/')}>Home</p>
        <p onClick={()=>navigate('/adminDashboard')}>Admin Dashboard</p>
        <p>My Profile</p>
        <p onClick={()=>navigate('/auctions')}>Auctions</p>
        <p onClick={()=>navigate('/loginOptions')}>Login</p>
      </div>

      <div className="flex flex-row justify-between items-center">
      <div>
        <h2>Online Auction System</h2>
        <p>A complete solution for managing online auctions</p>
      </div>

      {/* <div>
      </div> */}
      </div>
    </div>
  )
}

export default Navbar