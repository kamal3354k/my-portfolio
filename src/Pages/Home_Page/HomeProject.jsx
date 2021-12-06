import React from 'react'
import profile from '../Home_Page/profile.jpg';
import Carousel from 'react-bootstrap/Carousel'


function HomeProject() {
return (
<div>
    <section id="project">
        <h4 className="sevices-head">What i will do for you</h4>
        <h1 className="project-titles">Project</h1>

        <div className="project_box mobile-view-caro">
            <div class="container">
                <div className="row">

                    <Carousel>
                        <Carousel.Item>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>


                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>



                </div>
            </div>
        </div>
       

        <div className="project_box desktop-view-caro">
            <div class="container">
                <div className="row">

                   
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                       

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                      


                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-inner-box">
                                    <div class="project-li">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="prject-des">
                                        <h1>Web Design</h1>
                                        <p>
                                            I do ui/ux design for the website that helps website to get a unique look.
                                        </p>
                                        <div className="project-view-box">
                                        <button class="btn">view</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        



                </div>
            </div>
        </div>
       

        <h4 className="sevices-bottom">View more</h4>















    </section>

</div>
)
}

export default HomeProject