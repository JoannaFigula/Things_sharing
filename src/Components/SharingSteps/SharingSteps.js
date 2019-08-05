import React, {Component} from 'react';

import Signed from './Signed/Signed.js';
import StepOne from './Step1/Step1.js';
import StepTwo from './Step2/Step2.js';
import StepThree from './Step3/Step3.js';
import StepFour from './Step4/Step4.js';
import Login from "../Header/Login";
import Menu from "../Header/Menu";

class SharingSteps extends Component {
    render() {
        return (
            <section className="sharings">
                <Login />
                <Menu />
                <Signed/>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
                <StepFour/>
            </section>
        )
    }
}


export default SharingSteps;