import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header.js';
import YellowBar from './Components/YellowBar.js';
import FourSteps from './Components/FourSteps.js';
import Foundations from './Components/Foundations.js';
import AboutUs from './Components/AboutUs.js';
import Contact from './Components/Contact.js';


class App extends Component {

    render() {

        return (
            <div className="App">
                <Header id="header" />
                <YellowBar id="yellowBar" />
                <FourSteps id="yellowBar" />
                <AboutUs id="aboutUs" />
                <Foundations id="foundations" />
                <Contact id="contact"/>
            </div>
        );
    }
}

export default App;

