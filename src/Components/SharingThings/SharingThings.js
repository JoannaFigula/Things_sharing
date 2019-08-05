import React, { Component } from 'react';
import StepOne from './Step1/Step1.js';
import StepTwo from './Step2/Step2.js';
import StepThree from './Step3/Step3.js';
import StepFour from './Step4/Step4.js';

export default class SharingThink extends Component {
    state = {
        step: 1,
    }

    handleOnNext = (step, data) => {
        this.setState(prevState => ({
            ...prevState,
            ...data,
            step
        }))
    }

    handleOnPrev = () => {
        this.setState(prevState => ({
            step: prevState.step - 1
        }))
    }

    handleOnFinish = (data) => {
        this.setState(prevState => ({
            ...prevState,
            ...data
        }))

        console.log(this.state)
    }

    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return <StepOne onNext={this.handleOnNext} />
            case 2:
                return <StepTwo onNext={this.handleOnNext} onPrev={this.handleOnPrev} />
            case 3:
                return <StepThree onNext={this.handleOnNext} onPrev={this.handleOnPrev} />
            case 4:
                return <StepFour onFinish={this.handleOnFinish} />
        }
    }
}