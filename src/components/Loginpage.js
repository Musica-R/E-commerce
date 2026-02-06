
"use client";

import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginPopup.css";
import { auth } from "../Auth/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { handleLoginError, handleRegisterError } from "../Lottie/helper";
import Image from "next/image";
import loginImg from "../assets/Login.png";
import signupImg from "../assets/signin.png";

const LoginPopup = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  // 🔐 LOGIN with helper
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await auth.currentUser.reload();

      if (!auth.currentUser.emailVerified) {
        return alert("Please verify your email before login");
      }

      const token = await userCred.user.getIdToken();

      await axios.post(
        "/api/login",
        {
          uid: userCred.user.uid,
          email: userCred.user.email,
          emailVerified: true,
        },
        {
          headers: { Authorization: token },
        }
      );

      // if (data.data.datas[0].admin === "CUSTOMER") {
      //   alert("Login successful 🎉");
      //   onLoginSuccess?.();
      //   onClose();
      // }

      alert("Login successful 🎉");
      onLoginSuccess?.();
      onClose();
    } catch (error) {
      alert(handleLoginError(error));
    }
  };

  // 📝 SIGNUP with helper
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return alert("Enter a valid 10-digit mobile number");
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCred.user);

      const token = await userCred.user.getIdToken();

      await axios.post(
        "/api/register",
        {
          name,
          email,
          phonenumber: mobile,
          uid: userCred.user.uid,
          emailverified: false,
          admins: "CUSTOMER"
        },
        {
          headers: { Authorization: token },
        }
      );

      alert("Registered successfully! Verify your email 📩");
      setIsSignup(false);
    } catch (error) {
      alert(handleRegisterError(error));
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>✕</span>

        {isSignup ? (
          <form onSubmit={handleSignup} className="login-form">
            <Image src={signupImg} alt="signup" width={300} height={200} className="Login-img" />
            <h3>Create Account</h3>

            <input type="text" placeholder="Full Name" value={name}
              onChange={(e) => setName(e.target.value)} required />

            <input type="tel" placeholder="Mobile Number" maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              required />

            <input type="email" placeholder="Email Address" value={email}
              onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Sign Up</button>

            <p className="toggle-text">
              Already have an account?
              <span onClick={() => setIsSignup(false)} className="color">
                Login
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="login-form">
            <Image src={loginImg} alt="login" width={300} height={180} className="Login-img" />
            <h3>Login</h3>

            <input type="email" placeholder="Email Address" value={email}
              onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Login</button>

            <p className="toggle-text">
              Don&apos;t have an account?
              <span onClick={() => setIsSignup(true)} className="color">
                Sign Up
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
