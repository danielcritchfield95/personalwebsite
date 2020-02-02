import React from 'react';
import Footer from '../footer/footer';

import './about.css';
import './mobileAbout.css';

import ProfessionalMe from '../images/ProfessionalMe.png';

const About = () => {

    return (
        <div>
            <div className='About'>
                <div className='Container'>
                    <div className='Title'>
                        <h1>About Me</h1>
                    </div>
                    <div className='AboutContainer'>
                        <div className='ProfessionalImage'>
                            <img src={ProfessionalMe} alt='Daniel Critchfield' />
                        </div>
                        <div className='AboutContent'>
                            <h3>HI! I'M DANIEL</h3>
                            <p>
                                I am a Software Engineer.
                                I enjoy studying new technologies, and figuring out
                                creative ways to solve different problems.
                            </p>
                            <p>
                                I am a graduate of the University of Pittsburgh's computer engineering
                                 program and primarily focused on software engineering during my time there.
                                 What fascinates me about the field is the vast number of programming languages
                                 and technologies I get to learn as I progress through my career.
                            </p>
                            <p>
                                I have yet to find an area of programming that I haven't been interested in. That being
                                said, I am most experienced in full stack development (mostly back end dev up to this point).
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <Footer id='AboutFooter' />
        </div >
    );
}

export default About;