import React, {Component} from 'react';

class StepFour extends Component {
    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                const result = {};
                for (const val of e.target) {
                    result[val.name] = val.value
                }
                this.props.onFinish(result)
            }}>
                <h3>Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>

                <div className="form-section form-section--columns">
                    <div className="form-section--column">
                        <h4>Adres odbioru</h4>
                        <div className="form-group form-group--inline">
                            <label> Ulica <input type="text" name="address"/> </label>
                        </div>

                        <div className="form-group form-group--inline">
                            <label> Miasto <input type="text" name="city"/> </label>
                        </div>

                        <div className="form-group form-group--inline">
                            <label>
                                Kod pocztowy <input type="text" name="postcode"/>
                            </label>
                        </div>

                        <div className="form-group form-group--inline">
                            <label>
                                Numer telefonu <input type="phone" name="phone"/>
                            </label>
                        </div>
                    </div>

                    <div className="form-section--column">
                        <h4>Termin odbioru</h4>
                        <div className="form-group form-group--inline">
                            <label> Data <input type="date" name="data"/> </label>
                        </div>

                        <div className="form-group form-group--inline">
                            <label> Godzina <input type="time" name="time"/> </label>
                        </div>

                        <div className="form-group form-group--inline">
                            <label>
                                Uwagi dla kuriera
                                <textarea name="more_info" rows="5"></textarea>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group form-group--buttons">
                    <button type="button" className="btn prev-step">Wstecz</button>
                    <button type="submit" className="btn next-step">Dalej</button>
                </div>
            </form>
        )
    }

}

export default StepFour;