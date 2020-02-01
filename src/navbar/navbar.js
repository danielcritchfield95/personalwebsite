import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
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

        this.navRef = React.createRef();

        this.state = {
            dropDownActive: false
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

    handleLogoClick() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Router>
                <nav id='navbar' ref={this.navRef}>
                    <NavLink exact={true} to='/'><img className="Logo" src={logo} alt='My Logo' onClick={this.handleLogoClick}/></NavLink>
                    <ul id='navItems'>
                        <li><NavLink exact={true} to='/' activeClassName='ActiveLink' >Home</NavLink></li>
                        <li><NavLink to='/about' activeClassName='ActiveLink' >About</NavLink></li>
                        <li><NavLink to='/experience' activeClassName='ActiveLink'>Experience</NavLink></li>
                        <li><NavLink to='/projects' activeClassName='ActiveLink'>Projects</NavLink></li>
                    </ul>
                    <div className='DropDown' onClick={this.handleDropDown}>
                        <div className='Bar' id='bar1'></div>
                        <div className='Bar'id='bar2'></div>
                        <div className='Bar' id='bar3'></div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/projects' component={Projects} />
                    <Route component={this.notFound} />
                </Switch>
            </Router>
        );
    }
}

export default Navbar;