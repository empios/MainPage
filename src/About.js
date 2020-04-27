import React from "react";
import {Footer} from "./components/Footer";
import {AboutHeader} from "./components/AboutHeader";
import {Paragraph} from "./components/Paragraph";
import {Team} from "./components/Team";


export const About = () => {

    return(
        <React.Fragment>
            <AboutHeader/>
            <Paragraph/>
            <Team/>
            <Footer/>
        </React.Fragment>
    )

};