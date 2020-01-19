import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Experience from '../experience/experience';
import Projects from '../projects/projects';

import logo from '../images/DanClogo.png';

import './navbar.css';
import './mobileNavbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDownActive: false,
        };
    }

    handleDropDown = () => {
        const navItems = document.querySelector('#navItems');

        if (!this.state.dropDownActive) {
            navItems.style.display = 'block';
            this.setState({dropDownActive: true});
        } else {
            navItems.style.display = 'none';
            this.setState({dropDownActive: false});
        }
    }

    updateNavItems() {
        const mql = window.matchMedia('(max-width: 768px)');
        const navItems = document.querySelector('#navItems');
        if (mql.matches) {
            // console.log("mobile view");
            navItems.style.display = 'none';
        } else {
            // console.log("Desktop view");
            navItems.style.display = 'flex';
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateNavItems);
    }

    notFound() {
        return (
            <h1>404 Page Not Found</h1>
        );
    }

    render() {
        return (
            <Router>
                <nav id='navbar'>
                    <Link to='/'><img className="Logo" src={logo} alt='My Logo' /></Link>
                    <ul id='navItems'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                    <div className="DropDown" onClick={this.handleDropDown}>
                        <div className='Bar' id='bar1'></div>
                        <div className='Bar'id='bar2'></div>
                        <div className='Bar' id='bar3'></div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                    <Route component={this.notFound} />
                </Switch>
            </Router>
        );
    }
}

export default Navbar;