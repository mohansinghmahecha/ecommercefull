import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function Otp() {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                    OTP Verification
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex justify-center items-center mb-6">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        separator={<span className="text-gray-500 mx-8 w-[100px]">+</span>}
                        renderInput={(props) => (
                            <input
                                {...props}
                                className="w-12 m-8 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    />
                </div>
                <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                    Verify OTP
                </button>
            </div>
        </div>
    );
}
