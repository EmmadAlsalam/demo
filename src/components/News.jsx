import React from 'react'
import mar  from '../assets/images/25mars.png'
import mars  from '../assets/images/17mars.png'
import marsi  from '../assets/images/13mars.png'

const News = () => {
  return (
    <div>
               <section className="articles">
            <div className="article-top">
                <div className="article-top-left">
                    <p>Articles & News</p>
                    <h2>Get Every Single Article And News</h2>
                </div>
                <div className="article-top-right">
                    <a href="#">Browse Articles<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="article-bottom">
                <div>
                    <div className="item">
                        <div className="date-img">
                            <img src={mar} width="360" height="200"
                                alt="Girl sits on chair at table"/>
                            <div className="date">
                                <h4>25</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>How To Use The Digitalization In The Classroom</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                    <div className="item">
                        <div className="date-img">
                        <img src={mars} width="360" height="200"
                                alt="How to use chat gpt"/>
                            <div className="date">
                                <h4>17</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>How To Implement Chat GPT In Your Projects</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                    <div className="item">
                        <div className="date-img">
                        <img src={marsi} width="360" height="200"
                                alt="two books and telephone"/>
                            <div className="date">
                                <h4>13</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>The Guide To Support Modern CSS In Design</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                </div>
            </div>
            <span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </span>

        </section>
   
       
        <section className="update">
            <div>
                <h2>Get News Update By Signup</h2>
                <div>
                    <input type="text" placeholder="username@domain.com"/>
                    <a href="#">Subscribe<i className="fa-solid fa-arrow-right"></i></a>
                    <img src="images/Element get.svg" alt=""/>
                </div>
            </div>
        </section>
 
    </div>
  )
}

export default News