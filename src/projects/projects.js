import React, { Component } from 'react';
import Footer from '../footer/footer';
import Tile from '../tile/tile';
import Modal from '../modal/modal';

import './projects.css';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tiles: [
                {
                    title: 'Test',
                    content: 'content',
                    id: 0 // don't plan on removing any tiles so simple id is ok here
                },
                {
                    title: 'Test2',
                    content: 'content2',
                    id: 1
                }
            ],
            activeModal: false
        };
    }

    handleTileClick = () => {
        document.querySelector('.Modal').style.display = 'flex';
    }

    createTiles = () => {
        const tiles = this.state.tiles;
        let output = tiles.map(tile => {
            return (
                    <Tile
                        key={tile.id}
                        id={tile.id}
                        title={tile.title} />
            );
        });
        return output;
    }

    render() {
        return (
            <div>
                <Modal activeModal={this.state.activeModal} header={'heading'} content={'content'} />
                <div className='Projects' ref={this.ref}>
                    {this.createTiles()}
                </div>
                <Footer id='ProjectsFooter' />
            </div>
        );
    }
}

export default Projects;