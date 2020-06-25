import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_b02UVTxJ', e.target, 'user_npcwHsyzDRHWahOeGWqgW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

export const ContactForm = () => (

    <MDBContainer>
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Skontaktuj się z nami
            </h2>
            <p className="text-center w-responsive mx-auto pb-5">
                Chcesz się o coś zapytać? Może masz uwagi do naszej pracy lub chcesz wystawić nam opinię? Jeśli tak -
                zapraszamy do skorzystania z formy poniżej.
            </p>
            <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>
                            <h3 className="mt-2 blue-grey-text">
                                <MDBIcon icon="envelope"/> Napisz do nas:
                            </h3>
                            <p className="dark-grey-text">
                                Odpowiedź zwrotna będzie dostarczona w mniej niż 24h!
                            </p>
                            <form onSubmit={sendEmail}>
                                <div className="md-form">
                                    <input type="hidden" name="contact_number" />
                                    <MDBInput
                                        icon="user"
                                        label="Twoje imię"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                        name="name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Twój e-mail"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                        name="reply_to"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Temat"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                        name="subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Treść"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                        name="wiadomosc"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type={"submit"} color="light-blue">Wyślij</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="7">
                    <div
                        id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{height: "400px"}}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.367617552753!2d18.541428394329536!3d54.54379828265063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda7023a6440b3%3A0x6144d17db5b3ddb1!2sAkademia%20Marynarki%20Wojennej%20im.%20Bohater%C3%B3w%20Westerplatte!5e0!3m2!1spl!2spl!4v1587387185314!5m2!1spl!2spl"
                            title="Mapa dojazdu"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{border: 0}}
                        />
                    </div>
                    <br/>
                    <MDBRow className="text-center">
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="light-blue" className="accent-1">
                                <MDBIcon icon="map-marker-alt"/>
                            </MDBBtn>
                            <p>ul. Jana Śmidowicza 69</p>
                            <p className="mb-md-0">81-103 Gdynia</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="light-blue" className="accent-1">
                                <MDBIcon icon="phone"/>
                            </MDBBtn>
                            <p>+48 123456789</p>
                            <p className="mb-md-0">Poniedziałek - Piątek, 8:00-22:00</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="light-blue" className="accent-1">
                                <MDBIcon icon="envelope"/>
                            </MDBBtn>
                            <p>rentcars@rentcars.pl</p>
                            <p className="mb-md-0">sale@rentcars.pl</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    </MDBContainer>
)
