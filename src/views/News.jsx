import React from 'react'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import ShowNews from '../components/ShowNews'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div>
        <Header/>
        <ShowNews/>
        <NewsList/>
        <Footer/>
    </div>
  )
}

export default News