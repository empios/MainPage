import React from 'react';
import {MDBJumbotron, MDBBtn, MDBCol, MDBCardTitle, MDBIcon} from "mdbreact";
import app from '../assets/app.jpg';
import styled from 'styled-components';

const Styles = styled.div`

`;

export const AppJumbo = () => (


    <Styles>
        <MDBJumbotron fluid={true} style={{padding: 0}}>
            <MDBCol className="text-white text-center py-5 px-4 my-5"
                    style={{backgroundImage: `url(${app})`, backgroundSize: 'cover', backgroundBlendMode: 'darken'}}>
                <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Pobierz naszą aplikację
                        mobilną!</MDBCardTitle>
                    <p className="mx-5 mb-5">Dostępna jest na urzędzenia iOS oraz Android. Wspiera wszystkie
                        funkcjolaności które dla państwa zaprojektowaliśmy aby mieć pod ręką najważniejsze funkcje
                        naszego systemu.</p>
                    <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="mobile" className="mr-2"></MDBIcon>Pobierz
                        tutaj</MDBBtn>
                </MDBCol>
            </MDBCol>
        </MDBJumbotron>
    </Styles>
)