import React from 'react'
import Profile from '../Home_Page/profile.jpg'
function AboutSection() {
    return (
        <section id="About-about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ABout-about-me">
                        <p>Hi, I am <span>Ayan Khan</span></p>
                        <h1>A freelance Web developer</h1>
                        <p className="about-me-des">I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.</p>
                        <p className="about-me-des">I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</p>
                        <p className="about-me-des">My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
                        <div className="About-me-button-box">
                            <button className="CV-download">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="About-about-img-box"> <img src={Profile} alt="" /></div>
               
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection
