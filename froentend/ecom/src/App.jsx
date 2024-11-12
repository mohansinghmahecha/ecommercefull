import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Login from './component/login/Login';
import SignUp from './component/signup/SignUp';
import Otp from './component/otp/Otp';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <nav className="flex justify-between p-4 bg-gray-800 text-white">
                <Link to="/" className="hover:underline">Home</Link>
                <div>
                    <Link to="/login" className="mr-4 hover:underline">Login</Link>
                    <Link to="/signup" className="hover:underline">Sign Up</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<h1 className="text-center mt-10">Learning app</h1>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/otp" element={<Otp/>} />
                <Route path="*" element={<h1 className="text-center mt-10">Page not found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;