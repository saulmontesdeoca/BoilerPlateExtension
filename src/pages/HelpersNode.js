import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "react-bootstrap";
import sample from "../components/codeblocks";

const HelpersNode = () => {
	const [snippets] = useState(sample);

	return (
		<Layout>
			<Row>
				<Sidebar />
				<Col>
					<Row className="m-3">
						<Col>
							{" "}
							<h1>Node code snippets</h1>{" "}
						</Col>
					</Row>
					<Row className="row-cols-3 mx-3 my-3">
						{snippets.node.map((snippet) => {
							return (
								<Col>
									<Card
										title={snippet.title}
										code={snippet.code}
										language={snippet.language}
									/>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</Layout>
	);
};

export default HelpersNode;
