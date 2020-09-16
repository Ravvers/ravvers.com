import React from 'react';
import Button from '@material-ui/core/Button';

function Portfolio() {
    return(
        <div id = 'portfolio' className='content-wrapper'>
          <div className='projects-wrapper'>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='project1'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  {/* <img src={require('./images/logos/familyshopping.PNG')} alt='missing'></img> */}
                  <p id='family-shopping-logo'>family shopping</p>
                </div>

                <div className='project-description'>
                  A shopping list app with unique features
                </div>

                <div className='project-status-production'>
                  In Production<span className="material-icons in-production-cross">cancel</span>
                </div>

              </div>

            </div>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='project2'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  <p id='surekas-cakes-logo'>Sureka's Cakes</p>
                </div>

                <div className='project-description'>
                  A website for a local cake maker
                </div>

                <div className='project-status-production'>
                  In Production<span className="material-icons in-production-cross">cancel</span>
                </div>

              </div>

            </div>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='project4'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  <p id='valorant-logo'>VAlorant XP Calc</p>
                </div>

                <div className='project-description'>
                  An experience point calculator for the online game Valorant
                </div>

                <div className='project-status-production'>
                  In Production<span className="material-icons in-production-cross">cancel</span>
                </div>

              </div>

            </div>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='project3'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  <p id='samlu-logo'>SamLu RNG</p>
                </div>

                <div className='project-description'>
                  A random number generator
                </div>

                <div className='project-status-live'>
                  Live<span className="material-icons live-tick">check</span> <a href='https://www.samlu.org' target='_'><span className="material-icons live-preview-icon">preview</span></a> <a href='https://github.com/Ravvers/samlu.org' target='_'><i className='fa fa-github github-icon github-icon-portfolio'></i></a>
                </div>

              </div>

            </div>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='projectSocialMedia'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  <p className='website-default'>Social Media</p>
                </div>

                <div className='project-description'>
                  Check out my socials here:
                </div>

                <div className='project-status-live social-links'>
                  <a href='https://github.com/Ravvers' target='_'><i className='fa fa-github github-icon github-icon-socials'></i></a><a href='https://www.linkedin.com/in/raveen-maldeni/' target='_'><i className='fa fa-linkedin linkedin-icon'></i></a>
                </div>

              </div>

            </div>

            <div className='project-wrapper'>
              <div className='project-img-background img-lighten' id='projectContactMe'></div>
              
              <div className='img-text-wrapper'>
                <div className='logo-wrapper'>
                  <p className='website-default'>Contact Me</p>
                </div>

                <div className='project-description'>
                  If you would like to chat, don't hesitate to get in touch
                </div>

                <div className='project-status-live'>
                  <a className='email-link' href='mailto:rmaldeni@gmail.com'><Button id='message-me-button' variant='contained'>Message Me!</Button></a>
                </div>

              </div>

            </div>

          </div>
        </div>
    );
}

export default Portfolio;