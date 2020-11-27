import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
			<div className="container-fluid d-flex flex-column p-0">
				<a
					className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
					href="/"
				>
					<div className="sidebar-brand-text mx-3">
						<span>Code snippets</span>
					</div>
				</a>
				<hr className="sidebar-divider my-0" />
				<ul className="nav navbar-nav text-light mx-3" id="accordionSidebar">
					<li className="nav-item">
						<Link className="nav-link active" to="/helpers/react">
							{" "}
							React{" "}
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/helpers/angular">
							{" "}
							Angular
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/helpers/vue">
							{" "}
							Vue
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
