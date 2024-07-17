import React, { useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import logo from "../Images/factspan.png";
import disneyLogo from '../Images/login/disneyLogo.svg'
import userIcon from "../Images/userLogo.svg";
import userIconHovered from "../Images/userLogoHovered.svg";
// import notifyIcon from "../Images/notify.svg";
// import notifyIconHovered from "../Images/notifyHovered.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import {FaPowerOff} from "react-icons/fa6";
import "./Header.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  // const [isNotifyHovered, setIsNotifyHovered] = useState(false);

  const handleRouteToDashboard = () => {
    navigate("/portal/dashboard");
  };
 
  let name = localStorage.getItem("shortName");
  const clientId = "686843189174-ev5png2m2bmdivu4nruo4rhnk3bhioh2.apps.googleusercontent.com";
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    toast.success("Logged Out successfully!");
    localStorage.setItem("logout", true);
    localStorage.clear();
    navigate("/");
  };
  const onFailure = () => {
    console.log("Handle failure cases");
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  // Function to toggle the pop-up
  const togglePopup = () => {
    setIsUserDetailsOpen(!isUserDetailsOpen);
  };

  const handlePopupLeave= ()=>{
    setIsUserDetailsOpen(false)
  }



  return (
    <div className="header-main">
      <ToastContainer position="top-right" autoClose={5000} />
      <div onClick={handleRouteToDashboard} className="header-logo">
        <img src={disneyLogo} alt="logo"/>
      </div>
      <div className="vertical"></div>
      <div className="header-title">MxM WEB APP</div>

      {/* <div className="notify-icon">
        <button className="notify-button" onMouseEnter={() => setIsNotifyHovered(true)}
          onMouseLeave={() => setIsNotifyHovered(false)}>
            <img src={isNotifyHovered? notifyIconHovered:notifyIcon} alt="notify" />
        </button>
      </div> */}

      <div className="avtar_img">
        <button onClick={togglePopup} className="logout-popup" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <img
            src={isHovered ? userIconHovered : userIcon}
            alt="logo"
            className="img-url"
          />
        </button>
        <div>
          {isUserDetailsOpen && (
            <div className="popupLog">
              <div className="popup-close" align="right" onClick={togglePopup} onBlur={handlePopupLeave}>
                <AiFillCloseCircle />
              </div>
              <div className="popup-info">
                👤: {name}
              </div>
              <div className="pop-logout">
                <button className="logout-button" onClick={signOut}>
                  <FaPowerOff />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
