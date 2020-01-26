import React, { Component } from 'react';

import './modal.css';
import './mobileModal.css';

class Modal extends Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.parent = props.parent;
    }

    openModal = () => {
        const parent = this.parent;
        parent.blurSelf();
        const modal = this.ref.current;
        modal.style.display = 'flex';
    }

    closeModal = () => {
        const modal = this.ref.current;
        modal.style.display = 'none';
        this.parent.unblurSelf();
    }

    injectModalContent(header, content) {
        const modal = this.ref.current;
        modal.querySelector('.ModalHeader').innerHTML=header;
        modal.querySelector('.ModalContent').innerHTML=content;
    }

    render() {
        return (
            <div ref={this.ref} className='Modal'>
                <div className='ModalContainer'>
                    <div className='X' onClick={this.closeModal}>X</div>
                    <div className='ModalHeader'></div>
                    <div className='ModalContent'></div>
                    <div className='ModalFooter'>
                        <button onClick={this.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Modal;