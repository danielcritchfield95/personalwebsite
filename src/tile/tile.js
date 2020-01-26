import React from 'react';

import './tile.css';

const Tile = (props) => {

    function handleTileClick() {
        const modal = props.modal.current;
        modal.openModal();
        modal.injectModalContent(props.header, props.content);
    }

    return (
        <div className='Tile' onClick={handleTileClick}>
            <div className='TileHeader'>
                {props.title}
            </div>
        </div>
    );
}

export default Tile;