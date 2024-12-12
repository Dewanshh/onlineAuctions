import React from 'react'
import Layout from '../../Layout/Layout'

function ChagePasswordForm() {
  return (
    <Layout>
    <div className='bg-red-200'>
    <div className='mx-52 py-16'>
        <p className='m-4'>Change Password Form</p>
        {/* <p className=' mx-4'>Personal Details</p> */}
        <div className=''>
            <div className='flex flex-col m-4'>
                <label>Old Password</label>
                <input className='w-full' name="oldPassword" type='password' value={""}/>
            </div>
            <div className='flex flex-col m-4'>
                <label>New Password</label>
                <input className='w-full' name="newPassword" type='password' value={""}/>
            </div>

            <div className='flex flex-col m-4'>
                <label>Confirm Password</label>
                <input className='w-full' name="confirmPassword" type='password' value={""}/>
            </div>
        </div>
        <div className="bg-orange-400 text-white p-4 w-fit mx-4 ">Reset Password</div>
    </div>

   
    </div>
    </Layout>

  )
}

export default ChagePasswordForm