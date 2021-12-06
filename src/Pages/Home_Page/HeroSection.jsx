import React from 'react'
import Profile from '../Home_Page/profile.jpg'
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function HeroSection() {
    return (
        <>
            <div className="container">
                <div className="head_box">
                <h3 className="hero_heading">Hey ! I am </h3>
                <h1 className="Myname">Kamal Rathore</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="banner">
                            <img src={Profile} alt="" />
                           <div className="banner_bottom">
                           <p className="mydes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, placeat, exercitationem magni enim eos, numquam in dolore eum soluta maiores accusamus tenetur molestiae minus praesentium id? Mollitia quos dolores quaerat.</p>
                            <button className="see_work">
                                See my work
                            </button>
                           </div>
                        </div>
                    </div>
                </div>
               <div className="rotate_text">
               <ul className="social_box">
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaEnvelope/></li>
                    <li><FaLinkedinIn/></li>
                    <li>Follow me <FaChevronRight/></li>
                </ul>
                <div className="scroll_text">
                    Scroll <FaChevronRight/>
                </div>
               </div>
            </div>
        </>
    )
}

export default HeroSection
