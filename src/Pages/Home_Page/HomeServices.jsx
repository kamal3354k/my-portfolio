import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

function HomeServices() {
    return (
        <div>
            <section id="services">
                <h4 className="sevices-head">What i will do for you</h4>
                <h1 className="services-titles">SERVICES</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="services-box">
                            <p className="service-icon"><FaReact/></p>
                            <h4 className="service-title">Web Design</h4>
                            <p className="services-des">I do ui/ux design for the website that helps website to get a unique look.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="services-box">
                            <p className="service-icon"><FaCode/></p>
                            <h4 className="service-title">Web Dev</h4>
                            <p className="services-des">I also develop the websites. I create high performance website with blazing fast speed.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="services-box">
                            <p className="service-icon"><FaAppStore/></p>
                            <h4 className="service-title">App Dev</h4>
                            <p className="services-des">I develop mobile application. I create mobile app with eye catching ui.</p>
                            </div>
                        </div>
                        </div>


                </div>
              
            </section>
        </div>
    )
}

export default HomeServices
