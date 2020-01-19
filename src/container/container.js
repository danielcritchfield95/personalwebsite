import React from 'react';

import './container.css';

const Container = (props) => {

    const style = {
        backgroundColor: props.backgroundColor
    };

    return(
        <div className="Container" style={style}>
            {props.children}
        </div>
    );
}

export default Container;