import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="footer-head">Kamal Rathore</div>
                            <div className="footer-des">A freelance web designer and developer from Chittagong, Bangladesh. I always make websites that have unique designs and also has a good performance rate.</div>
                        </div>
                        <div className="col-lg-2 footer-nav"><h2>Important Links</h2>
                     <div>
                     <ul className="footer-important-link">
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
                     </div>
                        
                        </div>
                        <div className="col-lg-3 footer-nav"><h2>Contact Info</h2>
                        <div className="contact-footer">
                     <p>+91-9319853354</p>
                        <p>Kamal3354k@gmail.com</p>
                        <p>New Delhi, India</p>
                        {/* <p>Home</p> */}
                     </div>
                        </div>
                        <div className="col-lg-2 footer-nav"><h2 className="fL">social Links</h2>
                        <div>
                        <ul className="footer-link">
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaEnvelope/></li>
                    <li><FaLinkedinIn/></li>
                </ul>
                     </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>@ 2021 - Kamal Rathore | Desgin by Me.</p>
            </div>
        </div>
    )
}

export default Footer
