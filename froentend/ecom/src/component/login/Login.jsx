import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='w-full  h-full'>
            <div className="flex  items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-1">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-sm text-center text-gray-600">
                        Don't have an account? <a href="#" className="text-blue-500 font-semibold hover:underline" onClick={() => navigate("/signup")}>Sign up</a>
                    </p>
                </div>
            </div>

        </div>

    );
}
