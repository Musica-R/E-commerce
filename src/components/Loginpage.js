"use client";

import React, { useState } from "react";
import "../styles/LoginPopup.css";
import Image from 'next/image';
import login from "../assets/Login.png"
import { useRef } from "react";
import Lottie from "lottie-react";
import otpAnimation from "../Lottie/Pass.json";

const LoginPopup = ({ isOpen, onClose }) => {
    const [mobile, setMobile] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    //otp verification box modal 
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="login-overlay" onClick={onClose}>
            <div className="login-popup" onClick={(e) => e.stopPropagation()}>

                {!otpSent ? (
                    <>
                        <div className="loginwrap">
                            <Image src={login} alt="offer" className="Login-img" width={300} height={180} />
                            <h3>Login</h3>

                            <input type="number" placeholder="Enter mobile number" maxLength="10" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <button onClick={() => mobile.length === 10 && setOtpSent(true)}> Send OTP </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="loginwrap center">

                            {/* Lottie Animation */}
                            <div className="otp-lottie">
                                <Lottie
                                    animationData={otpAnimation}
                                    loop
                                    style={{ width: 180, height: 180 }}
                                />
                            </div>

                            <h3>Verify With OTP</h3>
                            <div className="otp-container">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        maxLength="1"
                                        inputMode="numeric"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(e.target.value, index)}
                                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                        className="otp-input"
                                    />
                                ))}
                            </div>
                            <button>Verify OTP</button>
                        </div>
                    </>
                )}
                <span className="close-btn" onClick={onClose}>✕</span>
            </div>
        </div>
    );
};

export default LoginPopup;
