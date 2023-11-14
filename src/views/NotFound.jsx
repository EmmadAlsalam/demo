import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/' className='btn-them'>Go back <i className='fa-solid fa-arrow-up-right'></i></Link>
    </div>
  );
};

export default NotFound;