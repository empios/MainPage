import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import lightBlue from "@material-ui/core/colors/lightBlue";


export const Team = () => (

    <MDBContainer fluid={true} style={{paddingTop: 40, paddingBottom: 100, backgroundColor: lightBlue["100"]}}>
        <MDBContainer>
            <MDBRow className="justify-content-center" style={{paddingBottom: 15}}>
                <h1>Nasz zespół</h1>
                <br/>
            </MDBRow>
            <MDBRow>
                <MDBCol style={{Width: "20rem", height: "25rem"}}>
                    <MDBCard>
                        <MDBCardImage className="img-fluid"
                                      src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                      waves/>
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">Michał Karbownik</MDBCardTitle>
                            <MDBCardBody className="text-center">Prezes i fundator zespołu z wieloletnim stażem
                                managerskim</MDBCardBody>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{Width: "20rem", height: "25rem"}}>
                    <MDBCard>
                        <MDBCardImage className="img-fluid"
                                      src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                      waves/>
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">Joanna Stasiak</MDBCardTitle>
                            <MDBCardBody className="text-center">Nasza doświadczona managerka obsługi klienta i
                                zapytań</MDBCardBody>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{Width: "20rem", height: "25rem"}}>
                    <MDBCard>
                        <MDBCardImage className="img-fluid"
                                      src="https://images.pexels.com/photos/7110/desk-office-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                      waves/>
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">Andrzej Grabowski</MDBCardTitle>
                            <MDBCardBody className="text-center">Back-end developer odpowiedzialny za stronę
                                techniczną</MDBCardBody>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </MDBContainer>

)