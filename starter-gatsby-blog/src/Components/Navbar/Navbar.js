import React, { useState } from "react";
import "./Navbar.css";
import Logo from '../../static/Images/Logo.svg'
import Hamberger from '../../static/Images/Hamberger.svg'
function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <span className="nav-logo">
                        <img className="Logo_image" src={Logo} alt="no logo" />
                    </span>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <span
                                className="nav-links"
                                onClick={handleClick}
                            >
                                For Employees
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-links"
                                onClick={handleClick}
                            >
                                For Employees
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Resources
                             </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                             </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-links"
                                onClick={handleClick}
                            >
                                FAQ
                             </span>
                        </li>
                    </ul>
                    <div className="mob_view">
                        <span
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Log In
                             </span>
                        <button className="signupbtn">Sign up</button>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <div className={`Hamberger ${click ? "fas fa-times" : "fas fa-bars"}`}>
                            <img src={Hamberger} className="Hamberger_item" alt="Hamberger menu" />
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default NavBar;