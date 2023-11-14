import React from 'react'
import Bild from '../assets/images/logotypvit.svg'

const Footer = () => {
  return (
    <footer> 
       <div>
          <div className="footer-top">
            <div className="left">
            <img src={Bild} alt="logo"/>
            <p>Lorem ipsum dolor sit amet consectetur  
                adipisicing elit. Placeat obcaecati voluptas  
                voluptates! Voluptates laborum nam 
                ratione minus necessitatibus, iure 
                praesentium.</p>
        </div>
        <div className="right">
            <div>
                <img src="images/Elementfooter.png" alt=""/>
                <div className="item">
                    <h4 >Company</h4>
                    <span>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Work</a>
                        <a href="#">Career</a>
                    </span>
                </div>
                <div className="item">
                    <h4
                    >Help</h4>
                    <span>
                        <a href="#">Customer support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </span>
                </div>
                <div className="item">
                    <h4 href="#">Resources</h4>
                    <span>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </span>
                </div>
                <div className="item">
                    <h4 href="#">Link</h4>
                    <span>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#"> Youtube Playlist</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
      <div className="footer-bottom">
          
          <div>
              <p> &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
              <div className="social-media-footer">
                  <a href="https://sv-se.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://se.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
          </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer