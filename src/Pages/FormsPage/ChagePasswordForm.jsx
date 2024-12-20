import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import api from '../../utils/apiUtils';
import { logout } from '../../utils/auth';

function ChangePasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);  
    const [errorMessage, setErrorMessage] = useState("");  
    const [successMessage, setSuccessMessage] = useState("");  

    const handleChange = async (e) => {
        e.preventDefault();


        setErrorMessage("");
        setSuccessMessage("");

        if (password !== confirmPassword) {
            return setErrorMessage("Passwords do not match. Please try again.");
        }

        if (password.length === 0 || confirmPassword.length === 0) {
            return setErrorMessage("Fields can't be empty.");
        }

        setLoading(true);  
        try {
            const role = localStorage.getItem('role');
            let response;

            if (role === 'admin') {
                response = await api.post('/auth/changeAdminPassword', {
                    email: localStorage.getItem('userEmail'),
                    password: confirmPassword,
                });
            } else {
                response = await api.post('/auth/changeCustomerPassword', {
                    email: localStorage.getItem('userEmail'),
                    password: confirmPassword,
                });
            }

            setLoading(false); 
            setSuccessMessage(response.data.message);  
            logout(); 
        } catch (error) {
            setLoading(false);  
            setErrorMessage("There was an error while changing the password. Please try again.");
            console.error(error);
        }
    }

    return (
        <Layout>
            <div className='my-4 min-h-screen mx-0 p-4 bg-gray-100 '>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Change Password</h2>

                <div className="py-16 bg-white">

                    {errorMessage && (
                        <div className="text-red-500 p-2 mb-4 border border-red-500 rounded">
                            {errorMessage}
                        </div>
                    )}

                    {successMessage && (
                        <div className="text-green-500 p-2 mb-4 border border-green-500 rounded">
                            {successMessage}
                        </div>
                    )}

                    <div className="">
                        <div className="flex flex-col m-4">
                            <label>New Password</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                name="newPassword"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col m-4">
                            <label>Confirm Password</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleChange}
                        disabled={loading}  
                        className="px-6 m-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                        {loading ? "Changing Password..." : "Reset Password"}
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default ChangePasswordForm;
