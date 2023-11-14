import React from 'react'
import thumbs from '../assets/images/Group 10000048621.png'
import diamant from '../assets/images/Group 10000048712.svg'
import diamanta from '../assets/images/Group 10000048703.png'
import head from '../assets/images/Group 10000048694.png'
import twogirls from '../assets/images/twogirls.png'


const Choose = () => {
  return (
    <div>
      <section className="choose">
            <div className="choose-left">
                <p> Why Choose Us </p>
                <h2>Why We Are The Best Business  Consulting Agency</h2>
                <div className="item">
                    <span className="item-icon">
                        <img src={thumbs }alt=""/>
                    </span>
                    <div>
                        <p>Process Excellence</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div className="item">
                    <span className="item-icon">
                        <img src={diamant} alt=""/>
                    </span>
                    <div>
                        <p>Strategic planning</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div className="item">
                    <span className="item-icon">
                        <img src={diamanta} alt=""/>
                    </span>
                    <div>
                        <p>Experience Design</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div className="item">
                    <span className="item-icon">
                        <img src={head} alt=""/>
                    </span>
                    <div>
                        <p>Artificial intelligence</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
            </div>
            <div className="choose-right">
                <div></div>
                <img src={twogirls} alt=""/>
            </div>
      </section>
  </div>
  )
}

export default Choose