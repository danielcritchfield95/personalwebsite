import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import Footer from '../footer/footer';

import './home.css';
import './mobileHome.css';

import Logo from '../images/DanClogoMedium.png';
import Me from '../images/MeInIsraelDesert.png';
import DownArrow from '../images/DownArrow.png';
import Batman from '../images/ImBatman.png';
import Bike from '../images/DanC.png';

class Home extends Component {

    constructor(props) {
        super(props);

        this.images = [Me, Batman, Bike];

        this.words = [
            'Software Engineer...'.split(''),
            'Java...'.split(''),
            'Spring Boot...'.split(''),
            'JUnit...'.split(''),
            'Mockito...'.split(''),
            'Python...'.split(''),
            'SQL...'.split(''),
            'JavaScript...'.split(''),
            'React...'.split(''),
            'HTML...'.split(''),
            'CSS...'.split(''),
            'Selenium...'.split('')
        ];

        this.state = {
            renderText: true,
            deleteText: false,
            i: 0,
            j: 0,
            paragraph: []
        }
    }

    typeContent = () => {
        window.clearTimeout(this.typing);

        const words = this.words;
        let text = '';
        let renderText = this.state.renderText;
        let deleteText = this.state.deleteText;
        let paragraph = this.state.paragraph;
        let i = this.state.i;
        let j = this.state.j;

        this.typing = setTimeout(() => {

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

            renderText = !renderText;
        }, 100);

    }

    componentWillUnmount() {
        this.reset();
    }

    reset() {
        this.setState({
            renderText: false,
            deleteText: false,
            paragraph: [],
            i: 0,
            j: 0
        });

        clearTimeout(this.typing);
    }

    scrollToIntro() {
        const intro = document.querySelector('#Intro');
        window.scrollTo(0, intro.offsetTop - 90);
    }

    scrollToWork() {
        const work = document.querySelector('#Work');
        window.scrollTo(0, work.offsetTop - 90);
    }


    render() {
        return (
            <div>
                <div id='Home'>
                    <div className='Container'>
                        <div className='blur'></div>
                        <div id='HomeLogo'>
                            <img src={Logo} alt="Medium Logo" />
                        </div>
                        <div id='HomeName'>
                            <p><span id='FName'>Daniel</span> <span id='LName'>Critchfield</span></p>
                        </div>
                        <div className='ChangingContent'>
                            {this.typeContent()}
                        </div>
                    </div>
                </div>
                <div id='padding'></div>
                <div className='DownArrow' id='HomeDownArrow'>
                    <img src={DownArrow} alt='Down Arrow' onClick={this.scrollToIntro} />
                </div>
                <div id='Intro'>
                    <div className='Item'>
                        <img id='Me' src={Me} alt='Daniel Critchfield' />
                    </div>
                    <div className='Item'>
                        <div className='CenteredDescription'>
                            <p>Intro</p>
                            <p>
                                I’m a computer engineering graduate from the University
                                of a Pittsburgh with a focus on software engineering.
                                I enjoy being a full stack developer, and I am always
                                looking to learn and work with new technologies.
                                </p>
                        </div>
                    </div>
                </div>
                <div className='DownArrow' id='IntroDownArrow'>
                    <img src={DownArrow} alt='Down Arrow' onClick={this.scrollToWork} />
                </div>
                <div id='Work'>
                    <div className='CarouselContainer'>
                        <Carousel images={this.images} />
                    </div>
                </div>
                <div id='Outro'>
                    <div className='Container'>
                        <h2>Outro</h2>
                    </div>
                </div>
                <Footer id='MainFooter' />
            </div>
        );
    }
}

export default Home;