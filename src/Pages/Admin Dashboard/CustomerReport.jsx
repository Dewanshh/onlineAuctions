import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import axios from 'axios';
import api from '../../utils/apiUtils';

function CustomerReport() {

  const [customerData,setCustomerData]=useState([]);

  const fetchCustomers=async ()=>{
    try{
      const responseData=await api.get('/customers/all').then(((json)=>json.data));
      setCustomerData(responseData);


    }catch(e)
    {
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchCustomers();

  },[customerData])
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Customer Report</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Customer Code</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Name</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Email</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Mobile</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">City</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                customerData.map((item,index)=>{
                  return <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.mobile}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.customerCity}, {item.customerCountry}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
                })
              }
            
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default CustomerReport;
