import React from 'react'
import Kristine from '../assets/images/Kristine Palmer.jpg'
import mark from '../assets/images/Mark Aubri.png'
import Kimberly from '../assets/images/Kimberly Hansen.jpg'
import Justin from '../assets/images/Justin Willoman.png'
import Cassandra  from '../assets/images/Cassandra Warren.png'
import Amanda  from '../assets/images/Amanda Tulling.png'
import Jack  from '../assets/images/Jack McDogglas.png'


const Testimonials = () => {
  return (
    <div>
     <section className="team-testimonials">
            <div className="team">
                      <div className="team-top">
                          <div className="team-top-left">
                              <p>Meet Our Team</p>
                              <h2>Experienced Team Members</h2>
                          </div>
                          <div className="team-top-right">
                              <a href="#">Browse Team<i className="fa-solid fa-arrow-right"></i></a>
                          </div>
                      </div>
                      <div className="team-bottom">
                          <div className="members">
                              <div className="member">
                                  <img src={Kristine} alt=""/>
                                  <h4>Kristine Palmer</h4>
                                  <p>Cheif Operation Officer</p>
                              </div>
                              <div className="member">
                                  <img src={mark}alt=""/>
                                  <h4>Mark Aubri</h4>
                                  <p>Senior Consultant</p>
                              </div>
                              <div className="member">
                                  <img src={Kimberly} alt="Team member"/>
                                  <h4>Kimberly Hansen</h4>
                                  <p>Senior Consultant</p>
                              </div>
                              <div className="member">
                                  <img src={Justin} alt="Team member"/>
                                  <h4>Justin Willioman</h4>
                                  <p>Senior Tech Consultant</p>
                              </div>
                          </div>
                          <div>
                              <span className="dot"></span>
                              <span className="dot"></span>
                              <span className="dot"></span>
                              <span className="dot"></span>
                              <span className="dot"></span>
                          </div>
                  </div>



                  <div className="WhatOurClientSays">
                      <p>Testmonial</p>
                      <h2>What Our Client Says</h2>
                      <div className="wrapper">
                          <div className="box">
                              <div className="stars">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  
                              </div>
                              <p>"Lorem ipsum dolor, sit amet consectetur 
                                  adipisicing elit. Laudantium libero, ad dignissimos
                                  velit qui, dolorum obcaecati cum saepe nesciunt 
                                  nemo eligendi numquam voluptate"
                              </p>
                              <div className="content">
                                  <div className="image">
                                      <img src={Cassandra } alt=""/>
                                  </div>
                                  <div className="info">
                                      <h4>Cassandra Warren</h4>
                                      <p>Buisness Manager,Derfous</p>
                                  </div>
                              </div>
                          </div>
                          <div className="box">
                              <div className="stars">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>

                                  
                              </div>
                              <p>"Lorem ipsum dolor, sit amet consectetur 
                                  adipisicing elit. Laudantium libero, ad dignissimos
                                  velit qui, dolorum obcaecati cum saepe nesciunt 
                                  nemo eligendi numquam voluptate"
                              </p>
                              <div className="content">
                                  <div className="image">
                                      <img src={Amanda} alt=""/>
                                  </div>
                                  <div className="info">
                                      <h4>Amanda Tulling</h4>
                                      <p>Senior Developer, Square</p>
                                  </div>
                              </div>
                          </div>
                          <div className="box">
                              <div className="stars">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>

                              </div>
                              <p>"Lorem ipsum dolor, sit amet consectetur 
                                  adipisicing elit. Laudantium libero, ad dignissimos
                                  velit qui, dolorum obcaecati cum saepe nesciunt 
                                  nemo eligendi numquam voluptate"
                              </p>
                              <div className="content">
                                  <div className="image">
                                      <img src={Jack}/>
                                  </div>
                                  <div className="info">
                                      <h4>Jack McDoggla</h4>
                                      <p>Senior Developer, Square</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                    <a className="link" href="#">All Reviews<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
              </div>
          </section>
    </div>
  )
}

export default Testimonials