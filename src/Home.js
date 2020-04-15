import React from "react";
import {Jumbotron} from "./components/Jumbotron";
import {Slider} from "./components/Slider";
import {Services} from "./components/Services";
import {AppJumbo} from "./components/AppJumbo";
import {Testimonials} from "./components/Testimonials";

export const Home = () => {

    return(
    <React.Fragment>
        <Slider/>
        <Jumbotron/>
        <Services/>
        <AppJumbo/>
        <Testimonials/>
    </React.Fragment>
    )
};