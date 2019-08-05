import React, {Component} from 'react';

class Registration extends Component {
    render() {
        return (
            <>
            <section className="registration container">
                <h2>Załóż konto</h2>
                <div className="contact-decoration-image"></div>
                <form className="form--contact">
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Hasło"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password2" placeholder="Powtórz hasło"/>
                    </div>

                    <div className="form-group form-group--buttons">
                        <a href="login" className="btn btn-hide">Zaloguj się</a>
                        <button className="btn" type="submit">Załóż konto</button>
                    </div>
                </form>
            </section>
                </>
    )
    }
}

export default Registration ;