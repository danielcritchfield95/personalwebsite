import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

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

    render() {
        return (
            <Router>
                <nav id='navbar'>
                    <img className="Logo" src={logo} alt='My Logo' />
                    <ul id='navItems'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="DropDown" onClick={this.handleDropDown}>
                        <div className='Bar' id='bar1'></div>
                        <div className='Bar'id='bar2'></div>
                        <div className='Bar' id='bar3'></div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                    <Route path="/about">
                        {/* <About /> */}
                    </Route>
                    <Route path="/contact">
                        {/* <Contact /> */}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Navbar;