import React from 'react';
import "./Sidebar.css"
import Header from './Header';
import { NavLink} from 'react-router-dom';
import dashIcon from "../Images/login/home.svg";

const Sidebar = ({children}) => {
    // const navigate = useNavigate();
  return (
    <div className='main-app'>
        <div className="sidebar-main">
            <div className="sidebar-container">
                <div className="sidebar-list">
                    <NavLink className="nav-link nav-link-dash" to="home" style={{cursor: 'pointer'}}>
                        <img className='nav-icon-dash'  src={dashIcon} alt="dashboard" style={{cursor:"pointer"}} />
                    </NavLink>
                </div>
                
            </div>

        </div>
        <main className='layout-main'>
            <div>
                <Header />
                {/* {children} */}
            </div>
            <div className='main-div-content'>{children}</div>
        </main>
    </div>
  )
}

export default Sidebar
