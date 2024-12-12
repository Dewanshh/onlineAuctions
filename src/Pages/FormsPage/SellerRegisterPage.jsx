import React from 'react'
import Layout from '../../Layout/Layout'

function SellerRegisterPage() {
  return (
    <Layout>
        <div className='bg-red-200 h-screen'>

        <div className=''>
            <p className='m-4'>Seller Login Details</p>
            <div className='flex flex-wrap'>
                <div className='flex flex-col m-4'>
                    <label>Seller Email</label>
                    <input className='w-full' name="sellerEmail" type='email' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Password</label>
                    <input className='w-full' name="sellerPassword" type='password' value={""}/>
                </div>
            </div>
        </div>

        <div className='w-3/4 '>
            <p className='m-4'>Seller Details</p>
            <div className='flex flex-wrap'>
                <div className='flex flex-col  m-4'>
                    <label>Seller Name</label>
                    <input className='w-full' name="sellerName" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller Contact Number</label>
                    <input className='w-full' name="sellerPassword" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller City</label>
                    <input className='w-full' name="sellerCity" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller State</label>
                    <input className='w-full' name="sellerState" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller Country</label>
                    <input className='w-full' name="sellerCountry" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller Address</label>
                    <textarea className='w-full' name="sellerAddress" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Seller Description</label>
                    <textarea className='w-full' name="sellerDescription" type='text' value={""}/>
                </div>
            </div>
            <div className='p-4 m-4 bg-orange-300 w-fit text-white hover:cursor-pointer'>Save Seller</div>
        </div>
        </div>
        </Layout>
  )
}

export default SellerRegisterPage