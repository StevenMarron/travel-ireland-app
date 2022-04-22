import React from "react";
import { Link } from "react-router-dom";
import App from "../App.css";
import Year from "./Year";

function Footer(){
	return(
		<footer className="container-fluid">
			<div className="container-lg">
				<div className="row">
					<div className="col-lg-12">
						<p>&copy;<span id="year"></span> Travel Ireland</p>
						{/* Year component is imported into the footer component */}
					</div>
				</div>
			</div>
			</footer>
		);
}

export default Footer;