import React from 'react'
import Layout from '../../Layout/Layout'

function ProductBidReport() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Product Bid Report</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Id</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Image</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Name</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Mobile</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Type</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Date</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Bid Amount</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Status</th>


              </tr>
            </thead>
            <tbody>

              <tr className="bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300"><div className='bg-red-200 h-16 w-16 w-full'></div></td>
                <td className="px-4 py-2 border border-gray-300">Amit Kumar</td>
                <td className="px-4 py-2 border border-gray-300">Kindle Voyage Wifi</td>
                <td className="px-4 py-2 border border-gray-300">123456788</td>
                <td className="px-4 py-2 border border-gray-300">Toys</td>
                <td className="px-4 py-2 border border-gray-300">11/12/2024 11:43</td>
                <td className="px-4 py-2 border border-gray-300">1300000</td>
                <td className="px-4 py-2 h-16 w-full bg-green-600  text-center text-white border border-gray-300">Accepted</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default ProductBidReport