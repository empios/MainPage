import React from "react";
import {Jumbotron} from "./components/Jumbotron";
import {Slider} from "./components/Slider";
import {Services} from "./components/Services";
import {AppJumbo} from "./components/AppJumbo";
import {Testimonials} from "./components/Testimonials";
import {FooterMain} from "./components/FooterMain";
import FetchCarInfo from "./components/FetchCarInfo";
import FetchLocInfo from "./components/FetchLocInfo";

export const Home = () => {

    return(
    <React.Fragment>
        <Slider/>
        <Jumbotron/>
        <Services/>
        <AppJumbo/>
        <Testimonials/>
        <FetchCarInfo/>
        <FetchLocInfo/>
        <FooterMain/>
    </React.Fragment>
    )
};
