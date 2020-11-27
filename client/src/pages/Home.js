import React, { useState } from "react";
import { Button, Image, Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Form from "../components/Form";

const Home = () => {
	const [formData, setFormData] = useState({
		frontend: "Angular",
		backend: "Node",
		packageManager: "npm",
	});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<Layout>
            <div className="text-center">
                <Jumbotron>
                    <h1>Welcome to MyBoilerPlate!</h1>
                    <p>You can build your own boiler-plate for any project you want.</p>
                    <p>
                        <Button variant="primary">Start</Button>
                    </p>
                </Jumbotron>
                <Form handleChange={handleChange} formData={formData} />
                <a
                    className="btn btn-outline-success"
                    href={`/${formData.frontend}_${formData.backend}_${formData.packageManager}.zip`} // File Name: "Angular_Node_npm.zip"
                    variant="outline-success"
                    download
                >
                    Download my BoilerPlate!
                </a>
            </div>
		</Layout>
	);
};

export default Home;
