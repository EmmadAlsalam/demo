import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Logo from '../components/Logo'
import Features from '../components/Features '
import About from '../components/About'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Project from '../components/project'
import Testimonials from '../components/Testimonials'
import News from '../components/News'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
        <Header/>
        <Showcase/>
        <Logo/>
        <Features/>
        <About/>
        <Services/>
        <Choose/>
        <Project/>
        <Testimonials/>
        <News />
        <Footer/>


    </>
  )
}

export default Home