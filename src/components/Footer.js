import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import styled from "styled-components";
import {MDBContainer, MDBIcon} from "mdbreact";

const Styles = styled.div`
  .navbar {
    background-color: #1b262c;
    
  }
   .nav-item{
    color: white;
  }
`;

export const Footer = () => (
    <Styles>
        <Navbar sticky={"bottom"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavItem><h6>Copyright: &copy;2020 RentCars</h6></NavItem>
                    <NavItem>
                        <MDBContainer>
                            <a className="fb-ic mr-3">
                                <MDBIcon fab icon="facebook-f"/>
                            </a>
                            <a className="tw-ic mr-3">
                                <MDBIcon fab icon="twitter"/>
                            </a>
                            <a className="ins-ic mr-3">
                                <MDBIcon fab icon="instagram"/>
                            </a>
                        </MDBContainer>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);