import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/apiUtils';

function AuctionsListingPage() {
  const navigate = useNavigate();
  const [auctionList, setAuctionList] = useState([]);

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
      <div className='py-8 min-h-screen px-4 bg-gray-100  '>
        <div className="text-3xl font-semibold text-center text-gray-800 mb-6">
          All Auctions
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctionList?.length > 0 ? (
            auctionList.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/listing/${item.id}`)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl"
              >

                <div className="w-full h-64 overflow-hidden">
                  {item.productImage ? (
                    <img
                      src={getImageUrl(item.productImage)}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-600">
                      Image Not Found
                    </div>
                  )}
                </div>


                <div className="p-4">
                  <p className="font-semibold text-xl text-gray-800 truncate">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.productDescription}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-xl text-gray-500 col-span-3">
              No ongoing auctions available.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AuctionsListingPage;
