import React from 'react';
import LogoHeader from './img/LogoHeader';

const Header = () => {
  return ( 
    <>
    <nav className='header orange darken-3'>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li><LogoHeader /></li>
        {/* <li><a href="!#">Repo?</a></li> */}
      </ul>
      <h1>React Movies</h1>
    </div>
  </nav>
    </>
   );
}
 
export default Header;