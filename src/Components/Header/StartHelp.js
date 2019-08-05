import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class StartHelp extends Component {
    render() {
        return(
            <section className="startHelp container">
                <div>
                    <h1>
                        Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div className="about-decoration-image"> </div>

                    <ul className="startHelp-btns">
                        <li><Link to="/sharing-things" ><button className="bttn">Oddaj rzeczy </button></Link></li>
                        <li><button className="bttn">Zorganizuj zbiórkę</button></li>
                    </ul>
                </div>
            </section>
        )
    }
}



export default StartHelp;