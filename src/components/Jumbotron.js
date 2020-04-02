import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import car from '../assets/car.jpg';

const Styles = styled.div`
  .header {
    background: url(${car}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -1;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="header">
            <div className="overlay"></div>
            <Container>
                <h1>Chciałbyś wypożyczyć samochód?</h1>
                <p>Jesteś w idealnym do tego miejscu, mamy szeroki wachlarz usług i pojazdów z którego Ty jako klient możesz skorzystać!</p>
            </Container>
        </Jumbo>
    </Styles>
)