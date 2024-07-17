import {React,useState} from "react";
import "./Login.css";
// import loginBackground from "./Images/login-backgroung.png";
// import MarketplaceLogo from "./Images/factspan-marketplace-logo.png";
// import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
// import logo from "../src/Images/logo.svg";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myIdBackground from "./Images/login/myId.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let email_id = "";
  let userName = "";
  let id = "";
  let image_Url;
  let shortName;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Capture email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Add your authentication logic here

    // If authentication is successful, navigate to the home page
    navigate('/home');
  };

  // const clientId = "686843189174-ev5png2m2bmdivu4nruo4rhnk3bhioh2.apps.googleusercontent.com";
  // const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const onSuccess = (res) => {
    // setProfile(res.profileObj);
    console.log("Login Successfull! Current user: ", res.profileObj);

    email_id = res.profileObj.email;

    image_Url = res.profileObj.imageUrl;
    userName = res.profileObj.name;
    id = res.profileObj.id;
    shortName = res.profileObj.givenName;
    localStorage.setItem("id", id);
    localStorage.setItem("userName", userName);
    localStorage.setItem("email_id", email_id);
    localStorage.setItem("image_url", image_Url);
    localStorage.setItem("shortName", shortName);
    toast.success("Sign In successfull!");
    navigate("/portal/dashboard");
  };

  const onFailure = (res) => {
    console.log("Login Failed! res ", res);
  };

  return (
    <div className="login-main-dev">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="form-container">
        <div className="overlay"></div>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="login_heading">
            <div className="">
              <img
                style={{ position: "relative", left: "-43%" }}
                src={myIdBackground}
              />
            </div>
          </div>
          <div className="Border_width"></div>
          <br />
          <div className="app_heading">MxM WEB APP</div>
          <br />
          <div className="welcome_heading">Welcome! Please Sign In </div>
          <br />
          <label className="input_font">
            Email Address / Lan ID
            <input
              placeholder="Enter here"
              className="input_font"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input_font">
            Password
            <input
              placeholder="Enter here"
              className="input_font"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Sign In</button>
          <br />
          <br />
          <div className="forget_text">forget Password ?</div>
        </form>
      </div>
      {/* <div className="row">
        <div className="col-9">
          <img
            className="login-left-image"
            src={loginBackground}
            alt="loginImage"
            width="100%"
          />
        </div>
        <div className="col-3  login-frame">
          <div className="login-title-container">
            <div className="login-title">
              <img className="marketplace-img" src={MarketplaceLogo} alt="logo" />
            </div>
          </div>
          <div className="login-bottom">
            <div className="welcome-text">Welcome !</div>
            <div className="sub-text">Please Sign - In</div>
            <div className="google-button">
              <GoogleLogin
                className="google"
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"sign_host_origin"}
                isSignedIn={true}
              >
                <div className="signIn-text">
                  Continue With Google
                </div>
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
