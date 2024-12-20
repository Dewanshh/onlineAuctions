import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';

function CustomerReport() {
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    setLoading(true); 
    try {
      const response = await api.get('/customers/all');
      setCustomerData(response.data); 
      setLoading(false); 
    } catch (e) {
      setError('Failed to fetch customer data');
      setLoading(false); 
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []); 
  if (loading) {
    return (
      <Layout>
        <div className="p-4 text-center">
          <p>Loading customer data...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="p-4 text-center text-red-600">
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  if (customerData.length === 0) {
    return (
      <Layout>
        <div className="p-4 text-center">
          <p>No customers found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Customer Reports</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Customer Code</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Name</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Email</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Mobile</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">City</th>

              </tr>
            </thead>
            <tbody>
              {customerData.map((item) => (
                <tr key={item.id} className="bg-white">
                  <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.mobile}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.customerCity}, {item.customerCountry}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default CustomerReport;
