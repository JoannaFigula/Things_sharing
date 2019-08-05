import React, {Component} from 'react';

import {
    Link,
} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
                <nav className="container login">
                    <ul className="navigation">
                        <li><Link to='/log' className="btn btn-login">Zaloguj</Link></li>
                        <li><Link to='/registration' className="btn btn-account">Załóż konto</Link></li>
                    </ul>
                </nav>
        )
    }
}

export default Login;