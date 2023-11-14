import React from 'react'
import Business from '../assets/images/Business Advice.png'
import Startup from '../assets/images/Startup Business.png'
import Financial from '../assets/images/Financial Advice.png'
import Risk  from '../assets/images/Risk Management.png'

const Features  = () => {
  return (
    <section className="feature">
      <div className="feature-left">
          <p>Features</p>
          <h2>Our Accounting is <br /> trusted by thousand <br /> of companies</h2>
          <a href="#">Learn More<i className="fa-solid fa-arrow-right"></i></a>
        </div>
      <div className="feature-right">
        <div className="feature-right-items">
            <div>
              <img src={Business}alt="Business"/>
              <h3>Business Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <img src={Startup}alt="Startup"/>
              <h3>Financial Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          <div>
            <img src={Financial}alt="Financial"/>
            <h3>Startup Business</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <img src={Risk }alt="rm"/>
            <h3>Risk Management</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features 