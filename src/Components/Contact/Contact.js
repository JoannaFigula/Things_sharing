import React, {Component} from 'react';
import classnames from 'classnames';

const validate = {
    name: (val) => !/^[^%]{3,}$/.test(val),
    email: (val) =>
        !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val),
    message: (val) => !/^[^%]{3,}$/.test(val),
}


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                label: "Imię",
                value: "",
                error: false,
            },
            email: {
                label: "E-mail",
                value: "",
                error: false
            },
            message: {
                label: "Message",
                value: "",
                error: false
            },
            success: false
        }
    }


    handleOnChange = name => e => {
        this.setState({
            [name]: {...this.state[name], value: e.target.value}
        })
    }

    handleOnBlur = name => e => {
        this.setState({
            [name]: {...this.state[name], error: validate[name](this.state[name].value)}
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const data = {}
        Object.keys(this.state).forEach(el => {
            data[el] = this.state[el].value
            this.setState(prevState => ({
                [el]: {
                    ...prevState[el],
                    value: ''
                }
            }))
        })
        this.setState({success: true})
        this.timeout = setTimeout(() => this.setState({success: false}), 5000)
        console.log(data)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }


    render() {
        const {name, email, message} = this.state;
        const valid = name.error || email.error || message.error;

        return (

            <footer className="footer">
                <div className="footerContact container">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="contact-decoration-image"></div>
                    <h3>Formularz kontaktowy</h3>

                    <form onSubmit={this.handleFormSubmit} className="form--contact">

                        <div className="form-group form-50">
                            <input
                                className={classnames({"error": this.state.name.error})}
                                type="text" name="name"
                                value={this.state.name.value}
                                onChange={this.handleOnChange('name')}
                                onBlur={this.handleOnBlur('name')}
                                placeholder={this.state.name.label}/>
                            {this.state.name.error && 'Wpisz imię'}
                        </div>

                        <div className="form-group form-50">
                            <input
                                className={classnames({"error": this.state.email.error})}
                                type="text" name="name"
                                value={this.state.email.value}
                                onChange={this.handleOnChange('email')}
                                onBlur={this.handleOnBlur('email')}
                                placeholder={this.state.email.label}/>
                            {this.state.email.error && 'Nieprawidłowy adres email'}
                        </div>

                        <div className="form-group">
                            <textarea
                                rows="1"
                                className={classnames({"error": this.state.message.error})}
                                type="text"
                                name="message"
                                value={this.state.message.value}
                                onChange={this.handleOnChange('message')}
                                onBlur={this.handleOnBlur('message')}
                                placeholder={this.state.message.label}
                            > </textarea>
                            {this.state.message.error && 'Wpisz wiadomość'}
                        </div>

                        <button disabled={valid} className="contactBtn" type="submit">Wyślij</button>
                    </form>
                    {this.state.success ? (
                        <div className="sucsess">
                            "Wiadomość wysłana poprawnie"
                        </div>) : false}


                </div>
                <div className="bottom-line">
                    <span className="copy">Copyright 2015 &copy; by Anna Dadej</span>
                    <div className="copy-icons">
                        <button><img alt="" className="fb"/></button>
                        <button><img alt="" className="insta"/></button>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact;