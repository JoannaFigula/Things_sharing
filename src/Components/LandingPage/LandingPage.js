import React from 'react';
import YellowBar from "../FourSteps/YellowBar";
import FourSteps from "../FourSteps/FourSteps";
import AboutUs from "../AboutUs/AboutUs";
import Foundations from "../Foundations/Foundations";
import Header from "../Header/Header";


const LandingPage = () => (
    <>
        <Header id="header" />
        <YellowBar id="yellowBar" />
        <FourSteps id="yellowBar" />
        <AboutUs id="aboutUs" />
        <Foundations id="foundations" />
    </>
)

export default LandingPage;
