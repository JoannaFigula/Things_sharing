import React, {Component} from 'react';
import './Menu.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import YellowBar from "./YellowBar";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations";
import Contact from "./Contact";


class Menu extends Component {

    render() {
        const options = {
            activeClass:"active",
            spy:true,
            smooth:true,
            offset:50,
            duration:500,
        }
        return(
            <nav className="container">
                <ul>

                    <li><Link to="header" {...options}>Start</Link></li>
                    <li><Link to="yellowBar" {...options}>O co chodzi?</Link></li>
                    <li><Link to="fourSteps" {...options}>O nas</Link></li>
                    <li><Link to="aboutUs" {...options}>Fundacje i organizacje</Link></li>
                    <li><Link to="foundations" {...options}>Kontakt</Link></li>
                    <li><Link to="contact" {...options}>Kontakt</Link></li>
                </ul>
            </nav>

            // <YellowBar id="yellowBar" />
            // <FourSteps id="fourSteps" />
            // <AboutUs id="aboutUs" />
            // <Foundations id="foundations" />
            // <Contact id="contact"/>
        )
    }
}






















export default Menu;