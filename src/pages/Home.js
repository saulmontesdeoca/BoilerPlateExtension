import React, { useState } from "react";
import { Button, Image, Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Form from "../components/Form";

const Home = () => {
	const [formData, setFormData] = useState({
		frontend: "React",
		backend: "Django",
		packageManager: "npm",
	});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const imgStyle = {
		boxShadow: "1px 1px 2px black, 0 0 25px black, 0 0 5px black",
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
			<div
				style={{
					padding: "1rem 0",
					boxSizing: "border-box",
					textAlign: "center",
				}}
			>
				<img
					src={`/${formData.frontend}_${formData.backend}_${formData.packageManager}.png`}
					alt={`${formData.frontend}_${formData.backend}_${formData.packageManager}`}
					style={imgStyle}
				/>
			</div>
		</Layout>
	);
};

export default Home;
