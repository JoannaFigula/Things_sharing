import React, {Component} from 'react';

const items = [
    {
        name: 'ubrania, które nadają się do ponownego uzycia',
        key: 'rewitalizacja'
    },
    {
        name: 'ubrania do wyrzucenia',
        key: 'neutralizacja'
    },
    {
        name: 'zabawki',
        key: 'zabawki'
    },
    {
        name: 'ksiązki',
        key: 'ksiązki'
    },
    {
        name: 'inne',
        key: 'inne'
    }
]

class StepOne extends Component{
    render() {
        return(



            <form>
                <div>
                    <h3>Zaznacz co chcesz oddać:</h3>

                    <div className="form-group form-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="products[]"
                                value="clothes-to-use"
                            />
                            <span className="checkbox"> </span>
                            <span className="description"
                            >ubrania, które nadają się do ponownego użycia</span
                            >
                        </label>
                    </div>

                    <div className="form-group form-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="products[]"
                                value="clothes-useless"
                            />
                            <span className="checkbox"> </span>
                            <span className="description">ubrania, do wyrzucenia</span>
                        </label>
                    </div>

                    <div className="form-group form-checkbox">
                        <label>
                            <input type="checkbox"
                                   name="products[]"
                                   value="toys"/>
                            <span className="checkbox"> </span>
                            <span className="description">zabawki</span>
                        </label>
                    </div>

                    <div className="form-group form-checkbox">
                        <label>
                            <input type="checkbox"
                                   name="products[]"
                                   value="books"/>
                            <span className="checkbox"> </span>
                            <span className="description">książki</span>
                        </label>
                    </div>

                    <div className="form-group form-group--checkbox">
                        <label>
                            <input type="checkbox"
                                   name="products[]"
                                   value="other"/>
                            <span className="checkbox"> </span>
                            <span className="description">inne</span>
                        </label>
                    </div>

                    <div className="form-group form-buttons">
                        <button type="button" className="btn next-step">Dalej</button>
                    </div>
                </div>
             </form>

        )
    }

}

export default StepOne;