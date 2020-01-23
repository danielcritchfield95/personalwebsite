import React from 'react';

import GitHub from '../images/GitHub-Mark-Light-64px.png';
import LinkedIn from '../images/LI-In-Bug.png';

import './footer.css';
import './mobileFooter.css';

const Footer = (props) => {
    return (
        <footer className='Footer' id={props.id} >
            <div className='LogoLinks'>
                <div className='LogoLink'>
                    <a href='https://github.com/danielcritchfield95' target='_blank' rel="noopener noreferrer"><img src={GitHub} alt='Github logo and link to github page'/></a>
                </div>
                <div className='LogoLink'>
                    <a href='https://www.linkedin.com/in/daniel-critchfield-83b17b127/' target='_blank' rel="noopener noreferrer"><img src={LinkedIn} alt='linkedin logo and link to linkedin page'/></a>
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