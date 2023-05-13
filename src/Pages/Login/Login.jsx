import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/google-btn.png';
import GithubLogo from '../../assets/github-btn.png';

const Login = () => {

    return (
        <Container>
            <Form className='col-9 col-md-6 mx-auto my-5 py-md-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    DoNot Have An Account? Please <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-muted">
                    {/* error message */}
                </Form.Text>

                <Form.Group className='text-center my-4 d-md-flex flex-column align-items-center'>
                    <div className='col-md-6'>
                        <img className='w-100 mb-2' src={GoogleLogo} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img className='w-100' src={GithubLogo} alt="" />
                    </div>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;