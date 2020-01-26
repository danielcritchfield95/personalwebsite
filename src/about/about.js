import React from 'react';
import Footer from '../footer/footer';

import './about.css';
import './mobileAbout.css';

import ProfessionalMe from '../images/ProfessionalMe.png';

const About = () => {

    return (
        <div>
            <div className="About">
                <div className='ProfessionalImage'>
                    <img src={ProfessionalMe} alt='Daniel Critchfield' />
                </div>
                <div className='AboutContent'>
                    <h3>HI! I'M DANIEL</h3>
                    <p>
                        I am a Computer Engineer and web developer.
                        I enjoy studying new technologies, and figuring out
                        creative ways to help them improve peoples' lives.
                    </p>
                    <p>
                        I am a graduate of the University of Pittsburgh engineering
                         program. I am focusing on software development,
                         and plan to continue learning new programming languages
                         and technologies as I progress through my career.
                    </p>
                    <p>
                        I have yet to find an area of programming or computer
                        engineering that I haven't been interested in. That being
                        said, I am most interested in exploring and creating new
                        technologies, as well as being at the fore front of improving
                        existing products.
                    </p>
                    <p>
                        Want to learn more? Feel free to reach out to me via phone
                        or email and I would be happy to answer any questions you may
                        have!
                    </p>
                    <br />
                </div>
            </div>
            <Footer id='AboutFooter' />
        </div>
    );
}

export default About;