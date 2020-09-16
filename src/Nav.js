import React from 'react';

function Nav() {
    return(
        <div id='nav'>
          <div id='left'>
          <a href='/'>RAVEEN MALDENI</a>
          </div>
          <div id='right'>
            <div className='nav-link-wrapper'>
              <a href='/'>Home</a>
            </div>
            <div className='nav-link-wrapper'>
              <a href='/about'>About</a>
            </div>
          </div>
        </div>
    );
}

export default Nav;