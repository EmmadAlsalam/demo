import React from 'react';

const NewsCard = ({  title, content, imageUrl, published, category, className }) => {
  const date = new Date(published);
  const datestamp = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateMonth = monthNames[date.getMonth()];

  return (
    <div className={`card-article ${className}`}>
     
      <div className='cardBox'>
        <div className="date-overlay">
          <div className="date-stamp">{datestamp}</div>
          <div className="date-month">{dateMonth}</div>
        </div>
        <img src={imageUrl} width="360" height="200" alt="" />
      </div>
      <div className="item">
        <p>{category}</p>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
