import React, { useState } from 'react';
import axios from 'axios';
import './EmailOtp.css';


const OtpForm = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', {
        otp
      });
      if (response.status === 200) {
        alert('OTP verified successfully!');
      } else {
        alert('Failed to verify OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP.');
    }
  };
  return (
  
<div className='H'>
   <div className="container">
   <form onSubmit={handleSubmit}>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required placeholder="Enter the OTP"/> 
      <button type="submit">Verify OTP</button>
  </form> 
  </div>
  </div>

  );
};

export default OtpForm;

