import React from 'react'
import Dam from '../assets/images/dam.svg'

const About = () => {
  return (
    <div>        
    <section className="about">
        <div className="about-left">
            <img src={Dam}/>
            <div className="about-left-box">
                <p>Samantha Brown, <span>Founder</span></p>
                <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</span>
            </div>
        </div>
        <div className="container about-right">
            <div>
                <h6>About Company</h6>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div>
                    <a href="http://127.0.0.1:5500/index.html">Learn More<i className="fa-solid fa-arrow-right"></i></a>
                    <a href="http://127.0.0.1:5500/index.html"><span>&#8227;</span>Intro Video</a>
                </div>
            </div>
        </div>
</section></div>
  )
}

export default About