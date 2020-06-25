import React from 'react';
import styled from 'styled-components';
import car from '../assets/car.jpg';
import {MDBBtn, MDBContainer, MDBJumbotron} from "mdbreact";

const Styles = styled.div`
  .header {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${car}) no-repeat center;
    background-size: cover;
    color: white;
    height: 300px;
    z-index: -1;
    backdrop-filter: brightness(200%);
  }
`;

export const Jumbotron = () => (
    <Styles>
        <MDBJumbotron fluid className="header">
            <MDBContainer>
                <h1>Chciałbyś wypożyczyć samochód?</h1>
                <p>Jesteś w idealnym do tego miejscu, mamy szeroki wachlarz usług i pojazdów z którego Ty jako klient możesz skorzystać!</p>
                <MDBBtn href="https://front-end-client-2bn7m8wzm.vercel.app/" gradient="blue">Przejdź do panelu Klienta!</MDBBtn>
            </MDBContainer>
        </MDBJumbotron>
    </Styles>
)
