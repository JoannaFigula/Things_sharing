import React, {Component} from 'react';
import { Link} from 'react-scroll';



class Menu extends Component {

    render() {
        const options = {
            activeClass:"active",
            smooth:true,
            offset:-200,
            duration:800,
        }
        return(
            <nav className="container menu">
                <ul className="navigation">
                    <li><Link className="btns btn-start" to="header" {...options}>Start</Link></li>
                    <li><Link className="btns btn-hide" to="yellowBar" {...options}>O co chodzi?</Link></li>
                    <li><Link className="btns btn-hide" to="aboutUs" {...options}>O nas</Link></li>
                    <li><Link className="btns btn-hide" to="foundations" {...options}>Fundacje i organizacje</Link></li>
                    <li><Link className="btns btn-hide" to="contact" {...options}>Kontakt</Link></li>
                </ul>
            </nav>
        )
    }
}






















export default Menu;