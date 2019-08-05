import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header/Header.js';
import LandingPage from './Components/LandingPage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Contact from './Components/Contact/Contact.js';

import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';



class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/log" component={Login} />
                    </Switch>
                    <Contact id="contact"/>
                </div>
            </Router>
        );
    }
}

export default App;

