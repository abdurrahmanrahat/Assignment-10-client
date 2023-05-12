import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-semibold'>YummyFood</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-light mx-2 fs-5' to="/">Home</Link>
                        <Link className='text-decoration-none text-light mx-2 fs-5' to="/blogs">Blogs</Link>
                    </Nav>
                    <Nav>
                        <Link>
                            <Button style={{backgroundColor: '#C19E66'}} variant="light" className='btn-lg fs-5 border border-0 text-light'>Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;