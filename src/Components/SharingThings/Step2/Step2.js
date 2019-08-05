import React, {Component} from 'react';

class StepTwo extends Component {
    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.onNext(3, {bags: e.target.bags.value})
            }}>
                <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

                <div className="form-group form-inline">
                    <label>
                        Liczba 60l worków:
                        <input type="number" name="bags"/>
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

export default StepTwo;