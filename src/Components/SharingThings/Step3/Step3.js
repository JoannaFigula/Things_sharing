import React, {Component} from 'react';

class StepThree extends Component {
    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                const result = {};
                for (const val of e.target) {
                    result[val.name] = val.value
                }
                this.props.onNext(4, result)
            }}>
                <h3>Wybierz organizacje, której chcesz pomóc:</h3>

                <div className="form-group form-group--checkbox">
                    <label>
                        <input type="radio" name="organization" value='Fundacja “Bez domu'/>
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
                        <input type="radio" name="organization" value='Fundacja “Dla dzieci"'/>
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
                    <button type="button" className="btn prev-step" onClick={() => this.props.onPrev()}>Wstecz</button>
                    <button type="submit" className="btn next-step">Dalej</button>
                </div>
            </form>
        )
    }

}

export default StepThree;