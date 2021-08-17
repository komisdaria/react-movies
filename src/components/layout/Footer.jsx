import React from 'react';

const Footer = () => {
  return ( 
    <>

  <footer className="page-footer orange darken-4">
    <div className="container">
            © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">Create by Daria Komissarova</a>
    </div>
  </footer>
            
    </>
   );
}
 
export default Footer;