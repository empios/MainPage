import React from "react";
import {Jumbotron} from "./components/Jumbotron";
import {Slider} from "./components/Slider";
import {Services} from "./components/Services";


export const Home = () => {

    return(
    <React.Fragment>
        <Slider/>
        <Jumbotron/>
        <Services/>
    </React.Fragment>
    )
};