import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return(
    <div className='navbar'>
      <div className='link-router'>
        <Link to="/">Home</Link>
      </div>
      <div className='link-router'>
        <Link to="/bucketlist">Bucket List</Link>
      </div>
      <div className='link-router'>
        <Link to="/visited">Visited</Link>
      </div>
    </div>
  )
}

export default NavBar;
