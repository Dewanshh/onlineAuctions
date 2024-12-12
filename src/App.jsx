import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import LoginOptions from './Pages/LoginPages/loginOptions';
import SellerRegisterPage from './Pages/FormsPage/SellerRegisterPage';
import LoginPage from './Pages/LoginPages/LoginPage';
import AdminDashboard from './Pages/Admin Dashboard/adminDashboard';
import CustomerRegisterPage from './Pages/FormsPage/CustomerRegisterPage';
import ProductForm from './Pages/FormsPage/ProductForm';
import CustomerReport from './Pages/Admin Dashboard/CustomerReport';
import ProductReportScreen from './Pages/Admin Dashboard/ProductReportScreen';
import ProductBidReport from './Pages/Admin Dashboard/ProductBidReport';
import ChagePasswordForm from './Pages/FormsPage/ChagePasswordForm';
import AuctionsListingPage from './Pages/Auctions Listing Page/AuctionListingPage';
import AuctioningProductDescriptionPage from './Pages/AuctioningProductDescription Pages/AuctioningProductDescriptionPage';
import CustomerDashboard from './Pages/Customer Dashboard Pages/CustomerDashboard';
import CustomerMyAccountPage from './Pages/Customer Dashboard Pages/CustomerMyAccountPage';
import CustomerMyBidsPage from './Pages/Customer Dashboard Pages/CustomerMyBidsPage';

const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        {/* Routes for Login */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/loginOptions' element={<LoginOptions />} />

        {/* Auctions Listing Page and Auctioning Item Description Page Routes */}
        <Route path='/auctions' element={<AuctionsListingPage/>}/>
        <Route path='/listing/:id' element={<AuctioningProductDescriptionPage/>}/>

        {/* Admin Dashboard Related Routes */}
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/sellerRegister' element={<SellerRegisterPage />} />
        <Route path='/customerRegister' element={<CustomerRegisterPage/>}/>
        <Route path='/productForm' element={<ProductForm/>}/>
        <Route path='/customerReport' element={<CustomerReport/>}/>
        <Route path='/productReport' element={<ProductReportScreen/>}/>
        <Route path='/productBidReport' element={<ProductBidReport/>}/>
        <Route path='/changePassword' element={<ChagePasswordForm/>}/>


        <Route path='/customerDashboard' element={<CustomerDashboard />}/>
        <Route path='/customerMyAccount' element={<CustomerMyAccountPage/>} />
        <Route path='/customerMyBids' element={<CustomerMyBidsPage/>} />







      </Routes>
    </BrowserRouter>
   )
};

export default App;
