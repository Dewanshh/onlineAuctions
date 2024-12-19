import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function CustomerLoginPage() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=async (e)=>{
        e.preventDefault();
        try{
            const response=await api.post("/auth/login",{
                email,password,role:"customer"
            })
            console.log(response.data);
            localStorage.setItem('userEmail',email);
            localStorage.setItem('token',response.data.token);
            navigate('/')
            

        }catch(e){
            console.log(e);
            alert("Invalid Credentials");
        }
    }
  return (
    <Layout>
        <div className='bg-red-200 py-6 my-2'>
            <div className='flex items-center justify-center my-4'>
                <div>
                    <p>Customer Login Page</p>
                    <div className='my-2 flex flex-col space-y-2'>
                        <label>UserName</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='my-2 flex flex-col space-y-2'>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div onClick={handleLogin} className='text-xl bg-orange-400 p-2 text-white rounded-xl w-fit hover:cursor-pointer'>
                        Login
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default CustomerLoginPage