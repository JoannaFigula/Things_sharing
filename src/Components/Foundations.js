import React, {Component} from 'react';
import Foundation from './data/foundation';
import Organization from './data/organizations';
import Local from './data/local';
import classnames from 'classnames';

// import Pagination from "react-js-pagination";


class Foundations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:Foundation, Organization, Local,
            currentPage: 1,
            textPerPage: 3,
            org: 1,
        };
    }

    handleClickFound = () => {
        this.setState({
            data: Foundation,
            org: 1
        });
    }

    handleClickOrg = () => {
        this.setState({
            data: Organization,
            org: 2
        });
    }

    handleClickLocal = () => {
        this.setState({
            data: Local,
            org: 3
        });
    }

    handleClick = (event)=> {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const { data, currentPage, textPerPage } = this.state;

        // Logika do wyświetlenia aktualnego tekstu
        const indexOfLastText = currentPage * textPerPage;
        const indexOfFirstText = indexOfLastText - textPerPage;
        const currentText = data.slice(indexOfFirstText, indexOfLastText);

        const renderText = currentText.map((element, index) => {
            return (
            <li key={`${element.name}-${index}`}>
                <div className="col">
                    <div className="title">{element.name}</div>
                    <div className="mission">{element.mission}</div>
                </div>
                <div className="col">
                    <div className="text">{element.items} </div>
                </div>
            </li>
        )
        });

        // Logika do wyświetlenia numerów stron
        const pageNumbers = [];
        for (let i=1; i<= Math.ceil(data.length/textPerPage); i++){
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map((number, index) => {
            return (
                <li key={`${number}-${index}`} ><button className="btn" id={number} onClick={this.handleClick} >{number}</button></li>
            )
        })

        return (
            <section className="foundations container">
                <h2>Komu pomagamy?</h2>
                <div className="about-decoration-image"> </div>

                <ul className="fundations-buttons">
                   <li id="1"><button className={classnames("btns", "btn-hide", {"btn-start": this.state.org === 1})} onClick={this.handleClickFound}>Fundacjom</button> </li>
                   <li id="2"><button className={classnames("btns", "btn-hide", {"btn-start": this.state.org === 2})} onClick={this.handleClickOrg}>Organizacjom pozarządowym</button></li>
                   <li id="3"><button className={classnames("btns", "btn-hide", {"btn-start": this.state.org === 3})} onClick={this.handleClickLocal}>Lokalnym zbiórkom</button></li>
                </ul>

                <div className="fundation-page">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    <ul className="fundations-items">
                        {renderText}
                    </ul>

                    <ul className="pagination">
                        {renderPageNumbers}
                    </ul>
                </div>
            </section>
        )
    }
}


export default Foundations;