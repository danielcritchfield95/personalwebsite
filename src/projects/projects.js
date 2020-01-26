import React, { Component } from 'react';
import Footer from '../footer/footer';
import Tile from '../tile/tile';
import Modal from '../modal/modal';

import Logo from '../images/DanClogoMedium.png'

import './projects.css';
import './mobileProjects.css';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
        this.projectsRef = React.createRef();

        this.tiles = [
            {
                title: <img src={Logo} alt='Logo' />,
                header: 'Personal Website',
                content: 'Used this website as an intro to working with React. I tried to implement most of the core functionality and animations from scratch instead of importing premade react components. All code for the site is on my github which is linked through the footer at bottom of the page',
                id: 0 
            },
            {
                title: 'React Phone Controller',
                header: 'React Phone Controller',
                content: 'Project that allowed for developer to download the react components and create a web game controller. The controller had empty handler methods for joystick and gesture panels that the developer could fill in for desired functionality. The code is on my github under the controller repository. Link to my github is in the footer at the bottom of the page',
                id: 1
            }, 
            {
                title: 'CPR Glove',
                header: 'Senior Design Project',
                content: 'Worked with a team of three other engineers to design a glove that would aid in the administration of CPR. The glove used a combination of auditory and visual feedback to give realtime information to the user of how they were doing and how to correct wrong actions.',
                id: 3
            }
        ];
    }

    createTiles = () => {
        const tiles = this.tiles;
        let output = tiles.map(tile => {
            return (
                <Tile
                    key={tile.id}
                    title={tile.title}
                    header={tile.header}
                    content={tile.content}
                    modal={this.modalRef} />
            );
        });
        return output;
    }

    blurSelf() {
        this.projectsRef.current.classList.add('blur');
    }

    unblurSelf() {
        this.projectsRef.current.classList.remove('blur');
    }

    render() {
        return (
            <div>
                <Modal ref={this.modalRef} parent={this} />
                <div id='Projects' ref={this.projectsRef}>
                    {this.createTiles()}
                </div>
                <Footer id='ProjectsFooter' />
            </div>
        );
    }
}

export default Projects;