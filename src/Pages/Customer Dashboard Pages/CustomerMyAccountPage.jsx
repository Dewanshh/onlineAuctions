import React from 'react'
import Layout from '../../Layout/Layout'

function CustomerMyAccountPage() {
    return (
        <Layout>
        <div className='bg-red-200 h-screen'>
        <p className='m-4'>Customer Registration Form</p>
        <div className=''>
            <p className=' mx-4'>Personal Details</p>
            <div className='flex flex-wrap'>
                <div className='flex flex-col m-4'>
                    <label>Name</label>
                    <input className='w-full' name="name" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Mobile</label>
                    <input className='w-full' name="mobileNumber" type='text' value={""}/>
                </div>
            </div>
        </div>
    
        <div className='w-3/4 '>
            <p className='m-4'>Login Details</p>
            <div className='flex flex-wrap'>
                <div className='flex flex-col  m-4'>
                    <label>Email</label>
                    <input className='w-full' name="email" type='email' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Password</label>
                    <input className='w-full' name="customerPassword" type='password' value={""}/>
                </div>
            </div>
    
            <div>
                <p className='m-4'>Address Details</p>
                <div className='flex flex-col m-4'>
                    <label>Customer City</label>
                    <input className='' name="customerCity" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Customer State</label>
                    <input className='' name="customerState" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Customer Country</label>
                    <input className='' name="customerCountry" type='text' value={""}/>
                </div>
                <div className='flex flex-col m-4'>
                    <label>Customer Address</label>
                    <textarea className='' name="customerAddress" type='text' value={""}/>
                </div>
            </div>
            <div className='p-4 m-4 bg-orange-300 w-fit text-white hover:cursor-pointer'>Save Customer</div>
        </div>
        </div>
        </Layout>
      )
}

export default CustomerMyAccountPage