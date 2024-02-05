import React from 'react';
import SideBar from '../../../components/sideBar';
import CardGrid from './cardGrid';
import { Grid } from '@mui/material';
import User from '../../../assets/images/profile.png';
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Settings() {
    const data = [
        { title: 'Total Sales', value: '$1.2M' },
        { title: 'Total Downloads', value: '$389k' },
        // { title: 'Total Users', value: '$155k' },
      ];
      const {user} = useSelector((state) => state.authReducer);
      console.log("🚀 ~ Settings ~ user:", user)
  return (
    <SideBar> 
    <div style={{display: "flex", margin: "200px auto"}}>
    <div style={{backgroundColor: "#fff", width: "20vw", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <img
            src={User}
            className="trader-profile-navbar_right_user-wrapper_image"
            alt="profile_pic"
            style={{height: "60px", width: "60px"}}
          />
    <h1 style={{color: "#000", fontSize: "2.0rem", marginTop: "10px"}}> {user?.firstName} </h1>
    <h1 style={{color: "#bfbfbf",  fontSize: "1.3rem", textTransform: "lowercase"}}> admin@admin.com </h1>
    </div>
    <div style={{backgroundColor: "#fff", marginLeft :"50px", width: "60vw", height: "30vh"}}>
        <div style={{display: "flex", alignItems: "self-end",margin: "50px 20px"}}> 
      <FaRegCircleUser color='#bfbfbf' size={20} />
      <h1 style={{color: "#000", fontSize: "1.5rem",  marginLeft: "20px", fontWeight: 600}}>Change Name</h1>
      {/* <div style={{alignItems: "end"}}>

      <FaArrowRight color='#000' />
      </div> */}
        </div>
        <div style={{display: "flex", alignItems: "self-end",margin: "50px 20px"}}> 
      <CiLock color='#bfbfbf' size={20} />
      <h1 style={{color: "#000", fontSize: "1.5rem",  marginLeft: "20px", fontWeight: 600}}>Change Password</h1>
      {/* <div style={{alignItems: "end"}}>

      <FaArrowRight color='#000' />
      </div> */}
        </div>
     
    </div>
    </div>
    </SideBar>
  )
}


export default Settings;