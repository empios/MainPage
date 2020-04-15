import React from 'react';
import Testimonial from 'react-testimonial';
import {MDBContainer} from "mdbreact";


export const Testimonials = () => (

    <MDBContainer>
        <Testimonial>
            <div className="card content mx-auto">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p class="mb-0">
                            Aplikacja mobilna to idealny wybór dla zapracowanych ludzi, system rezerwacji działa prosto
                            i przejrzyście. Polecam serdecznie!
                        </p>
                        <footer class="blockquote-footer">dr Jacek Tracz</footer>
                    </blockquote>
                </div>
            </div>
            <div className="card content mx-auto">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p class="mb-0">
                            Firma działa idealnie, szybki dostęp do sportowych samochodów oraz przyjemna obsługa
                            klienta.
                        </p>
                        <footer class="blockquote-footer">Michał Paryński</footer>
                    </blockquote>
                </div>
            </div>
        </Testimonial>
        <br/>
        <br/>
    </MDBContainer>
)