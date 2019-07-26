import React, {Component} from 'react';


class Login extends Component {
    render() {
        return(
            <nav className="container login">
                <ul className="navigation">
                    <li><button className="btn btn-login">Zaloguj</button></li>
                    <li><button className="btn btn-account">Załóż konto</button></li>
                </ul>
            </nav>
        )
    }
}

export default Login;