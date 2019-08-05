import React, {Component} from 'react';
import Login from './Login.js';
import Menu from './Menu.js';
import StartHelp from './StartHelp.js';


class Header extends Component {
    render() {
        return (
            <section className="container header">
                <Login />
                <Menu />
                <StartHelp />
            </section>
        )
    }
}

export default Header;