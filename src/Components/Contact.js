import React, {Component} from 'react';

function validate(name, email, message) {
    return {
        email: name.length === 0,
        password: email.length === 0,
        message: message.length === 0,
    };
}


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message:'',
            nameError:false,
            emailError: false,
            messageError: false,
            inFocus: '',
        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    };

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const errors = validate(this.state.name, this.state.email, this.state.message);

        const {name, email, message}=this.state;
        alert("Wypełnij prawidłowo formularz");

        this.setState({
            nameError: false,
            emailError: false,
            messageError: false,
        });

        if (this.state.name.length <= 2) {
            this.setState({
                nameError: 'Imię musi być dłuższe niż 2 znaki'
            })
        }
        if ( this.state.email.length <= 4 ) {
            this.setState({
                emailError: 'Email musi być dłuższy niż cztery zanki'
            })
        }
        if (this.state.message.length <= 4) {
            this.setState({
                emailError: 'Twoja wiadomość jest za krótka'
            })
        }
    }


    render() {
        const {name, email, message}=this.state;
        const errors = validate(name, email, message);

        return(
            <footer className="footer">
                <div className="footerContact container">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="contact-decoration-image"> </div>
                    <h3>Formularz kontaktowy</h3>

                    <form onSubmit={this.handleFormSubmit} className="form--contact">

                        <div className="form-group form-50">
                            <input className={errors.name ? "Imię musi być dłuższe niż 2 znaki" : ""} type="text" name="name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    placeholder="Imię"/>{this.state.nameError} </div>

                        <div className="form-group form-50">
                            <input className={errors.email ? "Email musi być dłuższy niż cztery zanki" : ""} type="text" name="email"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                                   placeholder="Email"/>{this.state.emailError} </div>

                        <div className="form-group">
                            <textarea className={errors.name ? "Twoja wiadomość jest za krótka" : ""} name="message"
                                      value={this.state.message}
                                      onChange={this.handleMessageChange}
                                      placeholder="Wiadomość" rows="1"></textarea>{this.state.messageError}</div>

                        <button className="contactBtn" type="submit">Wyślij</button>
                    </form>
                </div>
                <div className="bottom-line">
                    <span className="copy">Copyright 2015 &copy; by Anna Dadej</span>
                    <div className="copy-icons">
                        <button ><img alt="" className="fb"/></button>
                        <button ><img alt="" className="insta"/> </button>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact;