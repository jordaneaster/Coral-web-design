import React from 'react'
import './Footer.css'
import FooterLogo from '../../static/Images/LogoFooter.svg'
import FacebookLogo from '../../static/Images/facebook.svg'
import LinkedinLogo from '../../static/Images/linkedin.svg'
import TwitterLogo from '../../static/Images/twitter.svg'
import YoutubeLogo from '../../static/Images/youtube.svg'
import Insta from '../../static/Images/Insta.svg'
const Footer = () => {
    return (
        <div className="Footer_Container">
            <div className="Footerbox">
                <div className="Footer_left_Item">
                    <img className="Footerlogo" src={FooterLogo} alt="footer logo" />
                </div>
                <div className="Footer_right_item">
                    <p className="footerRoute">For Employee</p>
                    <p className="footerRoute">Resources</p>
                    <p className="footerRoute">FAQ</p>
                    <p className="footerRoute">For Employers</p>
                    <p className="footerRoute">About</p>
                </div>

            </div>
            <div className="Footer_copywrite">
                <div className="copywrite">
                    <p style={{margin:'0px'}}>© Copyright 2021 Coral Health</p>
                </div>
                <div className="logos">
                    <img className="logo_align" src={FacebookLogo} alt="facebooklogo" />
                    <img className="logo_align" src={TwitterLogo} alt="facebooklogo" />
                    <img className="logo_align" src={Insta} alt="facebooklogo" />
                    <img className="logo_align" src={LinkedinLogo} alt="facebooklogo" />
                    <img className="logo_align" src={YoutubeLogo} alt="facebooklogo" />
                </div>
            </div>
            <div className="Footer_boarder">
                <p className="terms">Terms of Use</p>
                <p className="terms">Medical terms of service</p>
                <p className="terms">HIPAA NPP</p>
                <p className="terms">Employee Privacy Notice</p>
                <p className="terms">Code of Business Conduct</p>
                <p className="terms">Privacy policy</p>
            </div>
        </div>
    )
}
export default Footer