import React, {Component} from 'react';

class StepTwo extends Component {
    render() {
        return(
            <div>
                <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

                <div className="form-group form-inline">
                    <label>
                        Liczba 60l worków:
                        <input type="number" name="bags"/>
                    </label>
                </div>

                <div className="form-group form-group--buttons">
                    <button type="button" className="btn prev-step">Wstecz</button>
                    <button type="button" className="btn next-step">Dalej</button>
                </div>
            </div>

        )
    }

}

export default StepTwo;