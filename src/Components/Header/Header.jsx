import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }

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
                        {
                           user && <span>{user.displayName}</span> 
                        }
                        <Link to="/login">
                            <Button style={{ backgroundColor: '#C19E66' }} variant="light" className='btn-lg fs-5 border border-0 text-light'>Login</Button>
                        </Link>
                        <Button onClick={handleLogout} style={{ backgroundColor: '#C19E66' }} variant="light" className='btn-lg fs-5 border border-0 text-light'>log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;