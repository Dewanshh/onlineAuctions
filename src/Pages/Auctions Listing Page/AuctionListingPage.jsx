import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom';
import api from '../../utils/apiUtils';

function AuctionsListingPage() {
    const navigate=useNavigate();
    const [auctionList,setAuctionList]=useState();

    const fetchProductData = async () => {
        try {
            const data = await api.get('/products/all').then(res => res.data);
            setAuctionList(data);
        } catch (e) {
            console.log(e);
        }
    };
    
    useEffect(() => {
        fetchProductData();
    }, []);


    const getImageUrl = (imageData) => {
        if (imageData && imageData.data) {
          const blob = new Blob([new Uint8Array(imageData.data)], { type: 'image/jpeg' });
          return URL.createObjectURL(blob);
        }
        return null;
      };
    
     
    
  return (
    <Layout>
        <div className='my-4'>
            <div>
                <div className='p-4 bg-white text-xl'>Ongoing Auctions: </div>
                <div className='bg-white'>
                    {auctionList?.length>0&&auctionList?.map((item,index)=>(
                        <div key={index} onClick={()=>navigate(`/listing/${item.id}`)} className="flex items-start border-y-[1px] py-4  justify-start  hover:cursor-pointer">
                            <div className='h-52 w-full min-w-52 max-w-52  mx-4'>

                                {item.productImage ? (
                                    <img
                                    src={getImageUrl(item.productImage)}
                                    alt="Product"
                                    className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="bg-gray-200 h-full w-full">Image Not Found</div>
                                )}
                                </div>
                            <div>
                                <p className='font-medium pb-4 text-xl'>{item.title}</p>
                                <p>{item.productDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AuctionsListingPage