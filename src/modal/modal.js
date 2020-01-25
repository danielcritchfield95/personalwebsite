import React, { Component } from 'react';

import './modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    closeModal = () => {
        const modal = this.ref.current;
        modal.style.display = 'none';
    }

    render() {
        return (
            <div ref={this.ref} className='Modal'>
                <div className='ModalContainer'>
                    <div className='X' onClick={this.closeModal}>X</div>
                    <div className='ModalHeader'>
                        {/* <h1>{props.heading}</h1> */}
                    </div>
                    <div className='ModalContent'>
                        {/* {props.content} */}
                    </div>
                    <div className='ModalFooter'>
                        <button onClick={this.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Modal;