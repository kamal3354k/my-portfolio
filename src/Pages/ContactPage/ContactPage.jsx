import React from 'react'

function ContactPage() {
    return (
        <section id="contact-box">
                        <h4 className="get-touch">Get in touch</h4>
                        <h2 className="contact-head">Contact me!</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                       <div className="contact-left">
                           <p>+91-9319853354</p>
                           <p>Kamal3354k@gmail.com</p>
                           <p>New Delhi, India</p>
                       </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-right">
                            <input type="text" placeholder="Your Name ?" />
                            <input type="text" placeholder = "Your Email ID ?"/>
                            <textarea name="" id="" placeholder="Message..." cols="30" rows="10"></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-box"></div>
        </section>
    )
}

export default ContactPage
