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
                content: 'I wrote this website using React',
                id: 0 
            },
            {
                title: 'React Phone Controller',
                header: 'React Phone Controller',
                content: 'content',
                id: 1
            },
            {
                title: 'EDD',
                header: 'Estimated Delivery Date',
                content: 'content',
                id: 2
            }, 
            {
                title: 'Sourcing Engine',
                header: 'Sourcing Allocation Engine',
                content: 'Sping Boot Java application to determine optimal sourcing locations for orders.',
                id: 3
            },
            {
                title: 'Automated Testing',
                header: 'Automated Test Scripts',
                content: 'Wrote automated test scripts using Java and Selenium to test a variety of different web applications.',
                id: 4
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