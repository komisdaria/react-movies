import React from 'react';

const Header = () => {
  return ( 
    <>
    <nav className='orange darken-3'>
    <div className="nav-wrapper">
      <h2>React Movies</h2>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* <li><a href="!#">Repo?</a></li> */}
      </ul>
    </div>
  </nav>
    </>
   );
}
 
export default Header;