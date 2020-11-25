import React, { useState } from "react";
import { Button, Image, Jumbotron } from "react-bootstrap";
import NavBar from "../components/Navbar";
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
		<>
			<NavBar />
			<Jumbotron>
				<h1>Welcome to MyBoilerPlate!</h1>
				<p>You can build your own boiler-plate for any project you want.</p>
				<p>
					<Button variant="primary">Start</Button>
				</p>
			</Jumbotron>
			<Form handleChange={handleChange} formData={formData} />
			<a
				href={`/${formData.frontend}_${formData.backend}_${formData.packageManager}.zip`} // File Name: "Angular_Node_npm.zip"
				variant="outline-success"
				download
			>
				Download my BoilerPlate!
			</a>
		</>
	);
};

export default Home;
