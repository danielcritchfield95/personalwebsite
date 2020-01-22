import React from 'react';

import GitHub from '../images/GitHub-Mark-Light-64px.png';
import LinkedIn from '../images/LI-In-Bug.png';

import './footer.css';
import './mobileFooter.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='LogoLinks'>
                <div className='LogoLink'>
                    <a href='https://github.com/danielcritchfield95' target='_blank'><img src={GitHub} /></a>
                </div>
                <div className='LogoLink'>
                    <a href='https://www.linkedin.com/in/daniel-critchfield-83b17b127/' target='_blank'><img src={LinkedIn} /></a>
                </div>
            </div>
            <div>
                <p><b>Email:</b> daniel.critchfield.primary@gmail.com</p>
                <p><b>Phone:</b> (412) 853 - 0235</p>
            </div>
            <br />
        </footer>
    );
}

export default Footer;