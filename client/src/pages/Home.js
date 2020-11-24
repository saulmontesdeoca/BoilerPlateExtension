import React from 'react';
import { Button, Image, Jumbotron } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Form from '../components/Form';
import logo from '../assets/bg.jpg'

const Home = () => {
    return (
        <>
            <NavBar />
            <Jumbotron>
                <h1>Welcome to MyBoilerPlate!</h1>
                <p>
                    You can build your own boiler-plate 
                    for any project you want.
                </p>
                <p>
                    <Button variant="primary">Start</Button>
                </p>
            </Jumbotron>
            <Form />
            <Button variant="outline-success">Download my BoilerPlate!</Button>
        </>
    );
};

export default Home;