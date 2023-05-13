import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import './Header.css';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }
    console.log(user?.photoURL);


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-semibold'>YummyFood</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {/* <NavLink className={`text-decoration-none text-light mx-2 fs-5 ${({ isActive }) => (isActive ? 'active' : 'default')}`} to="/">Home</NavLink> */}

                        <NavLink className='text-decoration-none text-light mx-2 fs-5' to="/">Home</NavLink>
                        <NavLink className='text-decoration-none text-light mx-2 fs-5' to="/blogs">Blogs</NavLink>
                    </Nav>
                    <Nav>
                        {
                            user && <img style={{ width: '40px', height: '40px' }} className='rounded-circle me-4 mt-1' src={user?.photoURL} alt="" />
                        }
                        {
                            user
                                ?
                                <Button onClick={handleLogout} style={{ backgroundColor: '#C19E66' }} variant="light" className='btn-lg fs-5 border border-0 text-light'>log Out</Button>
                                :
                                <Link to="/login">
                                    <Button style={{ backgroundColor: '#C19E66' }} variant="light" className='btn-lg fs-5 border border-0 text-light'>Login</Button>
                                </Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;