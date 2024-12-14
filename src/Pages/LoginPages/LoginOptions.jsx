import React from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'

function LoginOptions() {
  const navigate=useNavigate()
  return (
    <Layout>
        <div className='w-full bg-red-200 flex  justify-center items-center my-2 h-screen'>
            <div className='flex flex-col w-1/2 items-center justify-center border-2'>
                <p className='py-2 border-b-2 w-full text-center'>Login to your account</p>
                <div className='p-2'>

                <div onClick={()=>navigate("/loginA")} className="py-2 bg-black w-full text-center my-2 px-2 rounded-xl hover:cursor-pointer text-white">Admin Login</div>
                {/* <div onClick={()=>navigate("/login")} className="py-2 bg-black w-full text-center my-2 px-2 rounded-xl hover:cursor-pointer text-white">Seller Login</div> */}
                <div onClick={()=>navigate("/loginC")} className="py-2 bg-black w-full text-center my-2 px-2 rounded-xl hover:cursor-pointer text-white">Customer Login</div>
                </div>
            </div>
        </div>
        </Layout>
  )
}

export default LoginOptions