import React from 'react'
import Layout from '../../Layout/Layout'

function ProductForm() {
  return (
    <Layout>
    <div className='bg-red-200 h-screen'>
    <p className='m-4'>Product Form</p>
    <div className=''>
        {/* <p className=' mx-4'>Personal Details</p> */}
        <div className='flex flex-wrap'>
            <div className='flex flex-col m-4'>
                <label>Product Title</label>
                <input className='w-full' name="name" type='text' value={""}/>
            </div>
            {/* Seller Name Must be drop down from where we can choose the seller from  existing ones  */}
            <div className='flex flex-col m-4'> 
                <label>Seller Name</label>
                <input className='w-full' name="sellerName" type='text' value={""}/>
            </div>
            <div className='flex flex-col m-4'>
                <label>Product City</label>
                <input className='w-full' name="mobileNumber" type='text' value={""}/>
            </div>
            <div className='flex flex-col m-4'>
                <label>Minimum Bid</label>
                <input className='w-full' name="minimumBid" type='text' value={""}/>
            </div>
            <div className='flex flex-col m-4'>
                <label>Bid Start Date</label>
                <input className='w-full' name="bidStartDate" type='datetime-local' value={""}/>
            </div>

            <div className='flex flex-col m-4'>
                <label>Product Type</label>
                <input className='w-full' name="productType" type='text' value={""}/>
            </div>
            
            <div className='flex flex-col m-4 w-3/4'>
                <label>Product Image</label>
                <input className='w-full' name="productImage" type='file' value={""}/>
            </div>

            <div className='flex flex-col m-4 w-1/2'>
                <label>Product Description</label>
                <textarea className='w-full' name="productDescription" type='text' value={""}/>
            </div>
        </div>

        <div className='m-4 p-2 bg-orange-400 w-fit text-white rounded-xl'>Save Product</div>
    </div>

    
    </div>
    </Layout>
  )
}

export default ProductForm