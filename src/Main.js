import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return(
            <div className="main container">
                <div className="main-item">
                    <h1>
                        Zacznij pomagać!
                        <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                        <ul className="slogan-buttons">
                            <li><a href="#" className="btn">Oddaj rzeczy</a></li>
                            <li><a href="#" className="btn">Zorganizuj zbiórkę</a></li>
                        </ul>
                </div>
            </div>
        )
    }
}












export default Main;