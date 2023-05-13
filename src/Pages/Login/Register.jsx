import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if(password.length < 6){
            setError("Password should be six characters or numbers.");
            return;
        }

        // create user in register page
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess("Successfully user Register.");
                form.reset();
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleRegister} className='col-9 col-md-6 mx-auto my-5 py-md-5'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Your Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Already Have An Account? Please <Link to="/login">Login</Link>
                </Form.Text> <br />
                <Form.Text className="text-success fs-5">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger fs-5">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;