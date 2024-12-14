import React from 'react'
import {useNavigate} from 'react-router-dom'
import { getRoleFromToken, logout } from '../utils/auth';

function Navbar() {
  const navigate=useNavigate();
  const role=getRoleFromToken()
  const token=localStorage.getItem('token');


  return (
    <div className='bg-teal-200'>
      <div className='flex flex-row justify-end space-x-4 p-2 hover:cursor-pointer'>
        <p onClick={()=>navigate('/')}>Home</p>
        {role==='admin'&&<p onClick={()=>navigate('/adminDashboard')}>Admin Dashboard</p>}
        {role==='customer'&&<p onClick={()=>navigate('/customerDashboard')}>Customer Dashboard</p>}
        <p>My Profile</p>
        <p onClick={()=>navigate('/auctions')}>Auctions</p>
        {token?<p onClick={()=>{logout();navigate('/loginOptions')}}>Logout</p>:<p onClick={()=>navigate('/loginOptions')}>Login</p>}
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