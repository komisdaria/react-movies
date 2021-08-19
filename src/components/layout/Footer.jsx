import React from 'react';
import LogoGit from './imgFooter/LogoGit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <>

  <footer className="page-footer orange darken-4">
    <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <LogoGit />
        <a className="grey-text text-lighten-4 right" href="https://github.com/komisdaria">Create by Daria Komissarova</a>
    </div>
  </footer>
            
    </>
   );
}
 
export default Footer;