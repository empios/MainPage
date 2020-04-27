import React from 'react';
import {MDBCardTitle, MDBCol, MDBJumbotron} from "mdbreact";
import fastcar from '../assets/fastcar.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.centerdiv{
    margin-top: 0px !important;
}
`;


export const AboutHeader = () => (
    <Styles>
        <MDBJumbotron fluid={true} style={{padding: 0}}>
            <MDBCol className="text-white text-center py-5 px-4 my-5 centerdiv"
                    style={{
                        backgroundImage: `url(${fastcar})`,
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'darken',
                        backgroundPosition: 'center center'
                    }}>
                <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bolder">RentCars</MDBCardTitle>
                    <p className="h5-responsive mx-5 mb-5">Firma ma za sobą 15 lat doświadczenia w wypozyczaniu sprzętu samochodowego</p>
                </MDBCol>
            </MDBCol>
        </MDBJumbotron>
    </Styles>
)