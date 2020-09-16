import React from 'react';

function Footer() {
    return(
        <footer>
          <div className='footer-links'>
            <div className='footer-link-wrapper'>
              <a href='https://www.linkedin.com/in/raveen-maldeni/' target='_'>Linkedin</a>
              {/* <i class="fa fa-linkedin-square"></i> */}
            </div>
            <div className='footer-link-wrapper'>
              <a href='https://github.com/ravvers' target='_'>Github</a>
            </div>
            <div className='footer-link-wrapper'>
              <a href='/'>Portfolio</a>
            </div>
            <div className='footer-link-wrapper'>
              <a href='/about'>About</a>
            </div>
            <div className='footer-link-wrapper'>
              <a href='mailto:rmaldeni@gmail.com'>Contact me</a>
            </div>
          </div>
          <div className='copyright'>
            © 2020 Raveen Maldeni. All rights reserved.
          </div>
        </footer>
    );
}

export default Footer;