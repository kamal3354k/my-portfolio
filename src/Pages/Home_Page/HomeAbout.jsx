import React from 'react'
import Profile from '../Home_Page/profile.jpg'
function HomeAbout() {
    return (
        <div>
            <section id="home-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="about-me">
                                <p>Let me introduce myself</p>
                                <h1>ABOUT ME</h1>
                                <p className="about-me-des">I am a freelance website designer and developer from Chittagong, Bangladesh. I create professional websites. I love art and always try to show unique views to the audience through my design.</p>
                                <div className="about-me-button-box">
                                    <button className="works">
                                        Works
                                    </button>
                                    <button className="works-read">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="home-about-img-box"> <img src={Profile} alt="" /></div>
                       
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeAbout
