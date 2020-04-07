import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import styled from "styled-components";

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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavItem><h6>Copyright: &copy;2020 RentCars</h6></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
);