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
                id: 0 // don't plan on removing any tiles so simple id is ok here
            },
            {
                title: 'React Phone Controller',
                header: 'header',
                content: 'content',
                id: 1
            }
        ];
    }

    createTiles = () => {
        const tiles = this.tiles;
        let output = tiles.map(tile => {
            return (
                <Tile
                    key={tile.id}
                    id={tile.id}
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