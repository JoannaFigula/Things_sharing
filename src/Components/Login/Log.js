import React, {Component} from 'react';


class Log extends Component {
    render() {
        return (

            <section className="log container">
                <h2>Zaloguj się</h2>
                <div className="contact-decoration-image"> </div>
                <form>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Hasło"/>
                        <button className="btn reset-password">Przypomnij hasło</button>
                    </div>

                    <div className="form-group form-group--buttons">
                        <button className="btn btn-hide">Załóż konto</button>
                        <button className="btn" type="submit">Zaloguj się</button>
                    </div>
                </form>
            </section>

        )
    }
}

export default Log;