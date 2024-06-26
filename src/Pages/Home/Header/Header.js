import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom/dist';
import img1 from '../../../imges/header1-removebg-preview.png';
import './Header.css';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='NavbarHead' variant="dark" >
            <Container >
                <img className='ImagesHeader' src={img1} alt="" />
                <Navbar.Brand as={Link} to="/" className='TitleBar'>QUICK <br /> <span>SALON SOFTWARE</span></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown className='' title="FEATURES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>


                        </NavDropdown>

                        <Nav.Link href="#features">PRICING</Nav.Link>


                        <NavDropdown className='title' title="RESOURCES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                        </NavDropdown>


                        <NavDropdown className='title' title="INDUSTRIES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                        </NavDropdown>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="login" className='title' href="#signin">SIGN IN</Nav.Link>
                        <Nav.Link as={Link} to="register" className='NavBttton' >START FREE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;