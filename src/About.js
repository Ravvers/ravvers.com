import React from 'react';
import Button from '@material-ui/core/Button';

function About() {
    return(
        <div id='about'>
            <div className='about-section'>
                <div id='about-section-title'>
                    <h1>Hi there!</h1>
                </div>
                <div className='about-section-text'>
                    <p>I'm a software and web developer based in Auckland, New Zealand. I'm passionate about problem solving and learning new technologies to create new and exciting things.</p>
                </div>
            </div>
            <div className='about-section'>
                <div id='about-section-title'>
                    <h1>My mission</h1>
                </div>
                <div className='about-section-text'>
                    <p>I want to continue to learn new technologies so that I will be able to use all my experiences to help create something that contributes to communities. Working with others towards this goal is exciting, and so I am always looking for opportunites to collaborate with anyone.</p>
                </div>
            </div>
            <div className='about-section'>
                <div id='about-section-title'>
                    <h1>Need a hand?</h1>
                </div>
                <div id='about-last-section' className='about-section-text'>
                    <p>If there's something you would like to start working on, or even just discuss in general, don't hesitate to get in touch.</p>
                    <a className='email-link' href='mailto:rmaldeni@gmail.com'><Button id='message-me-button' variant='contained'>Message Me!</Button></a>
                </div>
            </div>
      </div>
    );
}

export default About;