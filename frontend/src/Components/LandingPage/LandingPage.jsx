import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div >
      <Link to="/homeComics">
        <button className='btn-landing'>Discover comics</button>
      </Link>
    </div>
  )
}

export default LandingPage