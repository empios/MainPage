import React from "react";
import {Carousel, CarouselItem} from "react-bootstrap";
import styled from "styled-components";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import bmw from '../assets/bmw.jpg';
import landrover from "../assets/landrover.jpg";

const Styles = styled.div`
img{
    filter:brightness(78%);
}
`;

export const Slider = () => (
    <Styles>
        <Carousel interval={2000}>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={bmw}
                    alt="BMW"
                    />
                    <CarouselCaption>
                        <h1>BMW</h1>
                        <h3>Wypróbuj ten flagowy model naszej wypożyczalni!</h3>
                    </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={landrover}
                    alt="BMW"
                />
                <CarouselCaption>
                    <h1>Range Rover</h1>
                    <h3>Zabierz rodzinę na przejażdżkę ogromnym SUV'em.</h3>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    </Styles >
);