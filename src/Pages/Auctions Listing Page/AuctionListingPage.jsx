import React from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom';

function AuctionsListingPage() {
    const navigate=useNavigate();
    const auctionList = [
        {
            id:1,
            title: 'Kindle Voyage Wifi',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            image: ''
        },
        {
            id:2,
            title: 'Samsung Galaxy Tab S7',
            description: 'The Samsung Galaxy Tab S7 combines power and portability with an advanced stylus experience. Perfect for professionals and students, it features a vivid display and long-lasting battery life.',
            image: ''
        },
        {
            id:3,
            title: 'Apple Watch Series 8',
            description: 'Stay connected and track your health with the Apple Watch Series 8. Featuring advanced sensors, customizable faces, and seamless integration with your Apple ecosystem.',
            image: ''
        },
        {
            id:4,
            title: 'Sony Noise Cancelling Headphones',
            description: 'Immerse yourself in music with the Sony WH-1000XM4 Noise Cancelling Headphones. Industry-leading noise cancellation and superior sound quality make it perfect for any environment.',
            image: ''
        },
        {
            id:5,
            title: 'Nikon D5600 DSLR Camera',
            description: 'Capture stunning photos and videos with the Nikon D5600. Equipped with a 24.2 MP sensor, built-in Wi-Fi, and an articulating touch screen, it’s perfect for photographers of all levels.',
            image: ''
        }
    ];
    
  return (
    <Layout>
        <div>
            <div>
                <div className='py-4 text-xl'>Ongoing Auctions: </div>
                <div>
                    {auctionList.map((item,index)=>(
                        <div onClick={()=>navigate(`/listing/${item.id}`)} className="flex items-start border-y-[1px] py-4  justify-center hover:cursor-pointer">
                            <div className='h-36 max-w-36 w-full mr-4 bg-red-400'>Image</div>
                            <div>
                                <p className='font-medium pb-4 text-xl'>{item.title}</p>
                                <p>{item.description}</p>
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