import React from "react";
import styled from "styled-components";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import man from "../assets/21194.jpg";
import reservation from "../assets/reservation.jpg";


const Styles = styled.div`

`;

export const Services = () => (
    <Container>
        <h2 class="text-center">Nasze zalety</h2>
        <p class="text-center">Jesteśmy działającą od ponad 5 lat firmą z ogromnym doświadczeniem.</p>
        <br/>
        <Styles>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={man}/>
                        <Card.Body>
                            <Card.Title>Samochody dostępne od ręki</Card.Title>
                            <Card.Text>
                                Działamy na terenie całej Polski, posiadamy liczne salony oraz punkty.
                            </Card.Text>
                            <Button variant={"danger"}>Sprawdź najbliższy punkt</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={reservation}/>
                        <Card.Body>
                            <Card.Title>System rezerwacji online</Card.Title>
                            <Card.Text>
                                Nie musisz wychodzić z domu aby zarezerwować wymarzone auto!
                            </Card.Text>
                            <Button variant={"danger"}>Zarezerwuj teraz</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Styles>
        <br/>
    </Container>
);