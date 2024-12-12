import React from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() { 
    const navigate=useNavigate();
    const adminOptions=[
        {name:"Add Customer",path:"/customerRegister"},
        {name:"Add Product",path:"/productForm"},
        {name:"Add Seller",path:"/sellerRegister"},
        {name:"Customer Report",path:"/customerReport"},
        {name:"Auction Report",path:"/auctionReport"},
        {name:"Product BidReport",path:"/productBidReport"},
        {name:"Change Password",path:"/changePassword"},
        {name:"Product Report",path:"/productReport"},


    ]
  return (
   <Layout>
    <div className='my-2'>
        <div >
            <h2>Admin Dashboard</h2>
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

export default AdminDashboard