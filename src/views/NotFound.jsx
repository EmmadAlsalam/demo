import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    color: '#333',
  };

  const headerStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: hovered ? '#e44d26' : '#333',
    transition: 'color 0.3s ease-in-out',
  };

  const paragraphStyle = {
    fontSize: '1.5em',
    color: '#777',
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginTop: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    transform: hovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
  };

  const linkStyle = {
    color: '#e44d26',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2em',
    display: 'inline-block',
    marginTop: '20px',
    border: '2px solid #e44d26',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomWords = () => {
    const words = ['Oopsie', 'Bamboozled', 'Gobbledygook', 'Higgledy-piggledy', 'Snickersnee'];
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
  };

  return (
    <div style={containerStyle}>
      <h1
        style={headerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {generateRandomWords()}! The Fun Fairies are on Strike! 🧚‍♂️✨
      </h1>
      <p style={paragraphStyle}>
        Looks like the mischievous fun fairies decided to take a break from spreading joy.
        They demand more glitter, shorter work hours, and a mandatory dance break every hour!
      </p>
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="Fun Fairies"
        style={imageStyle}
        onClick={() => alert('You clicked the Fun Fairies! They appreciate your support.')}
      />
      <p style={paragraphStyle}>
        While the fairies negotiate better working conditions, why not join the dance party back in{' '}
        <Link to="/" style={linkStyle}>
          Home Wonderland
        </Link>
        ? Don't worry, the unicorns are leading the conga line!
      </p>
    </div>
  );
};

export default NotFound;
