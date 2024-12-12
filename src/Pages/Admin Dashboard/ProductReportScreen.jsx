import React from 'react'
import Layout from '../../Layout/Layout'

function ProductReportScreen() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Product Report</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Id</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Image</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Seller</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Product Title</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Minimum Bid</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Type</th>
                <th scope="col" className="px-4 py-2 border border-gray-300 text-left">Actions</th>

              </tr>
            </thead>
            <tbody>

              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300"><div className='bg-red-200 h-16 w-full'></div></td>
                <td className="px-4 py-2 border border-gray-300">Seller 1</td>
                <td className="px-4 py-2 border border-gray-300">Kindle Voyage Wifi</td>
                <td className="px-4 py-2 border border-gray-300">13000</td>
                <td className="px-4 py-2 border border-gray-300">Toys</td>

                <td className="px-4 py-2 border border-gray-300">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default ProductReportScreen