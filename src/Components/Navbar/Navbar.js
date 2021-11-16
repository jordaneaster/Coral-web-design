import React, { useState } from "react";
import "./Navbar.css";
import Logo from '../../static/Images/Logo.svg'
import Hamberger from '../../static/Images/Hamberger.svg'
import { useStaticQuery, graphql } from 'gatsby';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const data = useStaticQuery(graphql`
    query globalNavbar {
        allContentfulGlobalNavigation {
          nodes {
            title
            slug
          }
        }
      }
  `);
    const navItems = data.allContentfulGlobalNavigation.nodes
    return (
        <>
                <nav className="navbar">
                    <div className="nav-container">
                        <span className="nav-logo">
                            <img className="Logo_image" src={Logo} alt="no logo" />
                        </span>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {navItems.map((el, i) => (
                                <li className="nav-item">
                                    <span
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        {el.title}
                                    </span>
                                </li>
                            ))}
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