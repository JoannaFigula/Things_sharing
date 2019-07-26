import React, {Component} from 'react';


class FourSteps extends Component {
    render() {
        return(

            <section className="fourSteps container">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="about-decoration-image"> </div>
                <div className="steps">
                    <div className="steps-item">
                        <span className="icon hands"> </span>
                        <h4>Wybierz rzeczy</h4>
                        <div className="line"> </div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="steps-item">
                        <span className="icon arrow"> </span>
                        <h4>Spakuj je</h4>
                        <div className="line"> </div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="steps-item">
                        <span className="icon glasses"> </span>
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <div className="line"> </div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="steps-item">
                        <span className="icon courier"> </span>
                        <h4>Zamów kuriera</h4>
                        <div className="line"> </div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>

                <button className="fourBtn">Załóż konto</button>
            </section>
        )
    }
}






















export default FourSteps;