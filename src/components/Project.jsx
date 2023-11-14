import React from 'react'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'


const Project = () => {
  return (
    <div>
        <section class="project-and-case">
            <div class="container">
                <div class="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Looks Our Global Projects</h2>
                </div>
                <div class="project-and-cases">
                    <article>
                        <img src={image1}alt=""/>
                        <h3>Grow your business</h3>
                        <a  href="services.html">Read More<i class="fa-solid fa-arrow-right"></i></a>
                    </article>

                    <article>
                    <img src={image2}alt=""/>
                        <h3>Educate your employees to get better results</h3>
                        <a href="services.html">Read More<i class="fa-solid fa-arrow-right"></i></a>
                    </article>  
                    <article>
                    <img src={image3}alt=""/>
                        <h3>Why your client needs a responsive website</h3>
                        <a href="services.html">Read More<i class="fa-solid fa-arrow-right"></i></a>
                    </article> 
                    <article>
                    <img src={image4}alt=""/>
                        <h3>Business Insights is a important piece of your business</h3>
                        <a  href="services.html">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </article>
                </div>
                <div class="a-link">
                    <a class="link" href="#">All Recent Projects<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
 
    </div>
            
        </section>
    </div>
  )
}

export default Project