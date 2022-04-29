import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  return (
    <div className='container-landing'>
      <Link to="/homeComics">
        <button className='btn-landing'>Discover comics</button>
      </Link>
    </div>
  )
}

export default LandingPage