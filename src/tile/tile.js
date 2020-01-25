import React from 'react';

import './tile.css';

const Tile = (props) => {

    return (
        <div className='Tile' onClick={props.onClick}>
            <div className='TileHeader'>
                {props.title}
            </div>
        </div>
    );
}

export default Tile;