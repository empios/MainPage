import React from "react";
import {Jumbotron} from "./components/Jumbotron";
import {Slider} from "./components/Slider";


export const Home = () => {

    return(
    <React.Fragment>
        <Slider/>
        <Jumbotron/>

    </React.Fragment>
    )
};