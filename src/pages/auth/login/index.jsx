import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { ADMIN_LOGIN } from '../../../redux/actions/authentication';
// import './Login.scss';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin"
  });
  
  const onChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
   try {
    dispatch(ADMIN_LOGIN(user, navigate))
    // navigate('/dashboard');
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <div className="login-screen">
      <div className="background-gradient"></div>
      <div className="glassmorphism-box">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
           type="email"
           id="email"
           name="email"
            value={user?.email}
            onChange={onChange}
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={user?.password}
            onChange={onChange}
            placeholder="Password"
            className="input-field"
          />
          <button type="submit" className="gradient-button" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
