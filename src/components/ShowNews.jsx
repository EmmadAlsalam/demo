import React from 'react'
import imageElement  from '../assets/images/Element.svg'


const ShowNews = () => {
  return (
<div>    
    <section className="newscase">
        <div className="homeNews">
        
            <h5 > Home  </h5>
            <h5> News</h5>
            
        </div>
            <div className='NewsArticles'>
            <h1>News & Articles</h1>
        
            </div>
            
        <img src={imageElement} />
         
</section>

</div>
  )
}

export default ShowNews