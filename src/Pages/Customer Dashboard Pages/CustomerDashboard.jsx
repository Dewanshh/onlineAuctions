import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Layout';

function CustomerDashboard() {
    const navigate=useNavigate();
    const adminOptions=[
        {name:"Home",path:"/"},
        // {name:"Sellers",path:"/productForm"},
        {name:"Auctions List",path:"/auctions"},
        {name:"My Bids",path:"/customerMyBids"},
        {name:"My Account",path:"/customerMyAccount"},
        {name:"Logout",path:"/"},


    ]
  return (
   <Layout>
    <div className='my-2'>
        <div >
            <h2>Customer Dashboard</h2>
            <p>Welcome to Online Auction System</p>
            <div className='py-2'>
                {
                    adminOptions.map((item,index)=>(
                        <div className='hover:cursor-pointer w-1/2 bg-orange-400 p-2 my-2 rounded-xl' onClick={()=>navigate(item.path)} >
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
   </Layout>
  )
}

export default CustomerDashboard