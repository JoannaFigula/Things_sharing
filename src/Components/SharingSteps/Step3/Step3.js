import React, {Component} from 'react';

class StepThree extends Component {
    render() {
        return(
            <div>
                <h3>Wybierz organizacje, której chcesz pomóc:</h3>

                <div className="form-group form-group--checkbox">
                    <label>
                        <input type="radio" name="organization" value="old"/>
                        <span className="checkbox radio"> </span>
                        <span className="description">
                  <div className="title">Fundacja “Bez domu”</div>
                  <div className="subtitle">
                    Cel i misja: Pomoc dla osób nie posiadających miejsca
                    zamieszkania
                  </div>
                </span>
                    </label>
                </div>

                <div className="form-group form-group--checkbox">
                    <label>
                        <input type="radio" name="organization" value="old"/>
                        <span className="checkbox radio"> </span>
                        <span className="description">
                  <div className="title">Fundacja “Dla dzieci"</div>
                  <div className="subtitle">
                    Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                    życiowej.
                  </div>
                </span>
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

export default StepThree;