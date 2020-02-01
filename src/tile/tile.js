import React from 'react';

import './tile.css';
import './mobileTile.css';

const Tile = (props) => {

    return (
        <div className='Tile'>
            <div className='InnerTile'>
                <div className='TileHeader'>
                    {props.title}
                </div>
                <div className='TileContent'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Tile;