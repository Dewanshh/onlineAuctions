import React from 'react'
import Layout from '../../Layout/Layout'

function LoginPage() {
  return (
    <Layout>
        <div className='bg-red-200 py-6 my-2'>
            <div className='flex items-center justify-center my-4'>
                <div>
                    <p>Login Page</p>
                    <div className='my-2 flex flex-col space-y-2'>
                        <label>UserName</label>
                        <input type="email" value="" />
                    </div>
                    <div className='my-2 flex flex-col space-y-2'>
                        <label>Password</label>
                        <input type="password" value="" />
                    </div>
                    <div className='text-xl bg-orange-400 p-2 text-white rounded-xl w-fit hover:cursor-pointer'>
                        Login
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default LoginPage