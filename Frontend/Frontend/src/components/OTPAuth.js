import React, { useState } from 'react';
import axios from 'axios';

const OTPAuth = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState('send');

  const sendOTP = async () => {
    await axios.post('http://localhost:4000/api/otp/send-otp', { phone });
    setStep('verify');
  };

  const verifyOTP = async () => {
    const { data } = await axios.post('http://localhost:4000/api/otp/verify-otp', { phone, code });
    alert(data.success ? '✅ OTP Verified!' : '❌ OTP Failed');
    if (data.success) setStep('sent');
  };

  return (
    <div style={{ padding: '20px' }}>
      {step === 'send' && (
        <>
          <h3>Enter your phone:</h3>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+911234567890" />
          <button onClick={sendOTP}>Send OTP</button>
        </>
      )}
      {step === 'verify' && (
        <>
          <h3>Enter OTP:</h3>
          <input value={code} onChange={e => setCode(e.target.value)} placeholder="123456" />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}
      {step === 'sent' && <p>Phone verified successfully! ✅</p>}
    </div>
  );
};

export default OTPAuth;
