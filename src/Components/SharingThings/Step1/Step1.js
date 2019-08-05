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
    getItems = () => (
        items.map((el, i) => (
            <div className="form-group form-checkbox">
                <label>
                    <input
                        type="checkbox"
                        name={el.key}
                    />
                    <span className="checkbox"> </span>
                    <span className="description">{el.name}</span>
                </label>
            </div>
        ))
    )

    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                const result = {};
                for (const val of e.target) {
                    result[val.name] = val.checked
                }
                this.props.onNext(2, result)
            }}>
                <div>
                    <h3>Zaznacz co chcesz oddać:</h3>
                    {this.getItems()}
                    <div className="form-group form-buttons">
                        <button type="submit" className="btn next-step">Dalej</button>
                    </div>
                </div>
             </form>

        )
    }

}

export default StepOne;