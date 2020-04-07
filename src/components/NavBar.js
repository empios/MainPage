import React from "react";
import { Link } from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Styles = styled.div`
  .navbar {
    background-color: #ffffff;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #1a1818;
    &:hover {
      color: #ff0000;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width={30}
                    height={30}
                    className="d-inline-block align-top"
                    alt={"Logo naszej firmy"}
                /> RentCars
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Strona główna</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">O nas</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact">Kontakt</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
);