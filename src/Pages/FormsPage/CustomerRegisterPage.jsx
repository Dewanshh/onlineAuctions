import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function CustomerRegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        customerPassword: '',
        customerCity: '',
        customerState: '',
        customerCountry: '',
        customerAddress: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post('/auth/registerCustomer', {
                email: formData.email,
                password: formData.customerPassword, 
                name: formData.name,
                mobile: formData.mobileNumber,
                role: 'customer',
                customerCity: formData.customerCity,
                customerAddress: formData.customerAddress,
                customerCountry: formData.customerCountry,
                customerState: formData.customerState,
            });
            navigate('/adminDashboard');
        } catch (e) {
            console.log('Error during registration:', e);
        }
    };

    return (
        <Layout>
            <div className="bg-red-200 h-screen">
                <p className="m-4">Customer Registration Form</p>
                <form >
                    <div className="">
                        <p className="mx-4">Personal Details</p>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col m-4">
                                <label>Name</label>
                                <input
                                    className="w-full"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label>Mobile</label>
                                <input
                                    className="w-full"
                                    name="mobileNumber"
                                    type="text"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-3/4">
                        <p className="m-4">Login Details</p>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col m-4">
                                <label>Email</label>
                                <input
                                    className="w-full"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label>Password</label>
                                <input
                                    className="w-full"
                                    name="customerPassword"
                                    type="password"
                                    value={formData.customerPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <p className="m-4">Address Details</p>
                            <div className="flex flex-col m-4">
                                <label>Customer City</label>
                                <input
                                    className=""
                                    name="customerCity"
                                    type="text"
                                    value={formData.customerCity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label>Customer State</label>
                                <input
                                    className=""
                                    name="customerState"
                                    type="text"
                                    value={formData.customerState}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label>Customer Country</label>
                                <input
                                    className=""
                                    name="customerCountry"
                                    type="text"
                                    value={formData.customerCountry}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label>Customer Address</label>
                                <textarea
                                    className=""
                                    name="customerAddress"
                                    value={formData.customerAddress}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="p-4 m-4 bg-orange-300 w-fit text-white hover:cursor-pointer" onClick={handleSubmit}>
                            Save Customer
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CustomerRegisterPage;
