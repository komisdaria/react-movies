import React from 'react';
import logoForHeader from './img/movie.png';

const LogoHeader = () => {
  return ( 
    <>
      <img className='logo-header' src={logoForHeader} alt='Logo header' />
    </>
   );
}
 
export default LogoHeader;