import React from 'react'

const ContactUs = () => {
  return (
    <div>    
            <section className="contact-top">
            <div>
                <div>
                    <p>Home</p>
                    <p>Contact</p>
                </div>
                <h4>Let's Connect</h4>
            </div>
            <img src="background-lines-right.svg" alt="wavyLine"/>
        </section>
        <section className="contact-body">
            <div className="ct-body-top">
                <div className="contact-boxes">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                        <h6>Visit Us</h6>
                        <p>Sveavägen 31</p>
                        <p>111 34 Stockholm</p>
                    </div>
                </div>
                <div className="contact-boxes">
                    <i className="fa-solid fa-phone-volume"></i>
                    <div>
                        <h6>Call Us</h6>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 50</p>
                    </div>
                </div>
                <div className="contact-boxes">
                    <i className="fa-regular fa-envelope"></i>
                    <div>
                        <h6>Email Us</h6>
                        <p>info@crito.com</p>
                        <p>infocrito@gmail.com</p>
                    </div>
                </div>
            </div>


        </section>

    </div>
  )
}

export default ContactUs