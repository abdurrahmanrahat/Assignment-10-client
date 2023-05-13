import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import IconImage from '../../assets/flower-decor-hr.png';

const Blogs = () => {
    return (
        <Container className='my-5 py-5'>
            <h2 className='text-center fs-1 mb-0'>Here are listed the given four Questions</h2>
            <div className='d-flex justify-content-center mb-4'>
                <hr className='text-dark w-25 text-end' />
                <img className='' src={IconImage} alt="" />
                <hr className='w-25 text-start' />
            </div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components</Accordion.Header>
                    <Accordion.Body>
                        In React, controlled components indicate components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        import PropTypes from 'prop-types'; They are often used after the component ends and starts with the name of the component as shown: import React from 'react'; import "PropTypes" from "prop-types"; const Count = props arrow function sign carley-braces-start then return something carley-braces-end; Count.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tell us the difference between nodejs and express js</Accordion.Header>
                    <Accordion.Body>
                        NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                        In React, a custom Hook is a function that starts with the word “use” and may call other Hooks. The “useWhatever” naming convention mainly allows the linter to find bugs in how these hooks are used, for example, scenarios where their usage goes against the rules of Hooks.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;