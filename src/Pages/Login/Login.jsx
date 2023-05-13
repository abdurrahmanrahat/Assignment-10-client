import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/google-btn.png';
import GithubLogo from '../../assets/github-btn.png';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const { signIn, githubSignIn, googleSignIn } = useContext(AuthContext);


    // handle login function
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn in login page
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Yehhoo!!");
                form.reset();
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
    }

    // handle github signIn
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // setUser(loggedInUser);
                setSuccess("User successfully login!!");
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })

    }

    // handle google signIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // setUser(loggedInUser);
                setSuccess("User successfully login!!");
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='col-9 col-md-6 mx-auto my-5 py-md-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    DoNot Have An Account? Please <Link to="/register">Register</Link>
                </Form.Text> <br />
                <Form.Text className="text-success fs-5">
                    {success}
                </Form.Text> <br />
                <Form.Text className="text-danger fs-5">
                    {error}
                </Form.Text>

                <Form.Group className='text-center my-4 d-md-flex flex-column align-items-center'>
                    <div className='col-md-6'>
                        <img onClick={handleGoogleSignIn} className='w-100 mb-2' src={GoogleLogo} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img onClick={handleGithubSignIn} className='w-100' src={GithubLogo} alt="" />
                    </div>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;