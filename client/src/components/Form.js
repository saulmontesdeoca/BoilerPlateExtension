import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Formm = ({ formData, handleChange }) => {
	return (
		<div>
			<Form>
				<Row className="justify-content-around">
					<Col lg={2}>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Select frontend</Form.Label>
							<Form.Control name="frontend" as="select" onChange={handleChange}>
								<option>React</option>
								<option>Angular</option>
								<option>Vue</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col lg={2}>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Select backend</Form.Label>
							<Form.Control name="backend" onChange={handleChange} as="select">
								<option>Django</option>
								<option>Node</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col lg={2}>
						<Form.Group
							name="packageManager"
							onChange={handleChange}
							controlId="exampleForm.ControlSelect1"
						>
							<Form.Label>Select package manager</Form.Label>
							<Form.Control as="select">
								<option>npm</option>
								<option>yarn</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default Formm;
