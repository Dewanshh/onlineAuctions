import Layout from "../Layout/Layout"


export const HomePage=()=>{
    return (
        <Layout>
            <div className="h-screen bg-blue-200">
                <div className="h-1/2 w-full bg-red-200">
                Image
                </div>
                <p className="text-2xl my-4 ">OnGoing Auctions</p>
                <div className="p-2 border-2 w-fit">
                    <p>
                        20 Auctions    
                    </p>
                    <p>Check Now =</p>
                </div>
            </div>
        </Layout>
    )
}