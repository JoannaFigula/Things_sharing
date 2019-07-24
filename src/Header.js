import React, {Component} from 'react';
import './Header.css';
import Login from './Login.js';
import Menu from './Menu.js';
import Main from './Main.js';

class Header extends Component {
    render() {
        return(
            <>
                <Login />
                <Menu />
                <Main />
            </>



        )
    }
}




export default Header;