import React from 'react'
import Layout from '../../Layout/Layout'

function AuctioningProductDescriptionPage() {
    const bidsList=[
        {userName:"Dewansh",bid:10000,time:"12.02.24 12:42"},
        {userName:"Dewansh",bid:12000,time:"12.02.24 12:42"},
    ]
  return (
    <Layout>
        <div className='p-8 bg-white my-4'>
            <div className=''>

                <p className='border-b-[1px] pb-2 font-medium text-xl'>Product Title: Durzza Jordan Single Seater</p>
                <div className='flex items-start space-x-4 my-4'>
                    <div className='h-32 w-32 min-w-32 max-w-32 max-h-32 bg-red-400'>Image</div>
                    <div>
                        <p>Addan Technology Private Limited Seller Details</p>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are </p>
                    </div>
                    
                </div>
                <div className='my-2'>
                        <table className='w-full border-[1px]'>
                            <tbody>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Product Title</th><td className='w-1/2 bg-gray-400 p-2 '>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Seller Name</th><td className='w-1/2 bg-white p-2'>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Product Type</th><td className='w-1/2 bg-gray-400 p-2'>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Product City</th><td className='w-1/2 bg-white p-2'>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Post Date</th><td className='w-1/2 bg-gray-400 p-2'>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Product Minimum Bid</th><td className='w-1/2 bg-white p-2'>Fprzzza Jordan Single Seater</td></tr>
                                <tr className='w-full'><th className='w-1/2 bg-gray-600 text-white p-2 border-b-[1px]'>Bid Amount</th><td className='w-1/2 bg-gray-400 p-2'>
                                <div className='flex space-x-2 items-center'>
                                    <input className='p-2' type='number' placeholder='Bid Amount '/>
                                    {/* If User is logged in then this should be shown */}
                                        <div className='p-2 bg-orange-600 my-2 w-fit text-white'>Bid Now</div>
                                        {/* If User is not logged in */}
                                        <div className='p-2 bg-orange-600 my-2 w-fit text-white'>
                                        Login To Bid
                                        </div>
                                    </div>
                                    </td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
                    <div className='space-y-2 border-[1px] p-[4px]'>
                        <p className='underline font-medium'>Product Description:</p>
                        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande</p>
                    </div>

                    <div>
                        <p className='text-2xl font-medium border-b-2 p-2'>Biddings: </p>
                        <div className='p-2'>
                        {
                            bidsList.map((item,index)=>(
                                <div className='w-1/2 border-[2px] my-2 p-2'>
                                    <p className='my-2 text-xl'>Bid: <span className='text-green-600 ml-2'>Rs. {item.bid}</span></p>
                                    <div className='my-2 flex justify-between'>
                                        <p>User: {item.userName}</p>
                                        <p>Bidded On: {item.time}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        
                    </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default AuctioningProductDescriptionPage