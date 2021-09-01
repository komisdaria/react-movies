import React from 'react';
import LogoGit from './img/LogoGit';

const Footer = () => {
  return ( 
    <>
  <footer className="page-footer orange darken-4">
    <div className="container">
            © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="https://github.com/komisdaria/react-movies">Create by Daria Komissarova</a>
            <LogoGit />
    </div>
  </footer>      
    </>
   );
}
 
export default Footer;