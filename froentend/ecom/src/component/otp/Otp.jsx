import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { useLocation } from "react-router-dom";

export default function Otp() {
  const location = useLocation();
  const { email } = location.state || {};
  const [otp, setOtp] = useState("");

  const handleOnClick = () => {
    console.log("clicked");
    const loginPayload = {
      email: email,
      verificationPin: otp,
    };
  
    axios.post("http://localhost:5000/verifyotp", loginPayload)
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          toast.success("OTP verified successfully!", {
            duration: 2000,
            position: "top-center",
          });
        } else {
          // Handle 400 error or any error with response data
          toast.error(response.data.message || "Error verifying OTP", {
            duration: 2000,
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        // Handle network errors or unexpected issues
        if (error.response && error.response.status === 400) {
          // This block handles 400 Bad Request errors specifically
          toast.error(error.response.data.message || "Invalid OTP or email", {
            duration: 2000,
            position: "top-center",
          });
        } else {
          toast.error("Network error. Please try again.", {
            duration: 2000,
            position: "top-center",
          });
        }
      });
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          OTP Verification
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-2 opacity-50 cursor-not-allowed"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-center items-center mb-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span className="text-gray-500 mx-8 w-[100px]">+</span>}
            renderInput={(props) => (
              <input
                {...props}
                className="w-12 m-8 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>
        <button
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
