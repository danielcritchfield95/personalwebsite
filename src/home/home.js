import React, { Component } from 'react';
import Container from '../container/container';

import './home.css';

import Logo from '../images/DanClogoMedium.png';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            letters: 'Software Engineer...'.split(''),
            letters1: 'Java...'.split(''),
            letters2: 'Python...'.split(''),
            letters3: 'JavaScript...'.split(''),
            renderText: false,
            deleteText: false,
            i: 0,
            j: 0,
            paragraph: []
        }

    }

    typeContent = () => {
        const words = [
            this.state.letters,
            this.state.letters1,
            this.state.letters2,
            this.state.letters3
        ];
        let text = '';
        let renderText = this.state.renderText;
        let deleteText = this.state.deleteText;
        let paragraph = this.state.paragraph;
        let i = this.state.i;
        let j = this.state.j;

        if (renderText) {
            if (!deleteText) {
                paragraph.push(words[j][i % words[j].length]);
            } else {
                paragraph.pop();
            }

            text = paragraph.join("") + '|';

            i++;

            if (deleteText && paragraph.length === 0) {
                j++;
                if (j % words.length === 0) {
                    j = 0;
                }
                i = 0;
            }

            if (i % words[j].length === 0) {
                deleteText = !deleteText;
            }

        } else {
            text = paragraph.join("");
        }

        this.typing = setTimeout(() => {
            this.setState({
                renderText: renderText,
                deleteText: deleteText,
                paragraph: paragraph,
                i: i,
                j: j
            });
            const changingContent = document.querySelector('.ChangingContent');
            if (changingContent !== null && changingContent !== undefined) {
                changingContent.innerHTML = text;
            }
        }, 100);

        renderText = !renderText;
    }

    componentWillUnmount() {
        clearTimeout(this.typing);
    }

    render() {
        return (
            <Container backgroundColor={'#ccc'}>
                <div id='Home'>
                    <div id='HomeLogo'>
                        <img src={Logo} alt="Medium Logo" />
                    </div>
                    <div id='HomeName'>
                        <p>Daniel Critchfield</p>
                    </div>
                    <div className='ChangingContent'>
                        {this.typeContent()}
                    </div>
                </div>
            </Container>
        );
    }
}

export default Home;