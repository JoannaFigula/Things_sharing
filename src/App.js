import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import YellowBar from './YellowBar.js';
import FourSteps from './FourSteps.js';
import Foundations from './Foundations.js';
import AboutUs from './AboutUs.js';
import Contact from './Contact.js';


class App extends Component {

    render() {

        return (
            <div className="App">
                <Header id="header" />
                <YellowBar id="yellowBar" />
                <FourSteps id="fourSteps" />
                <AboutUs id="aboutUs" />
                <Foundations id="foundations" />
                <Contact id="contact"/>
            </div>
        );
    }
}

export default App;

