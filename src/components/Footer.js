import React from "react";
import { Link } from "react-router-dom";
import App from "../App.css";

function Footer(){
	return(
		<footer className="container-fluid">
			<div className="container-lg">
				<div className="row">
					<div className="col-lg-12">
						<p>&copy;<span className="year"></span> Travel Ireland</p>
					</div>
				</div>
			</div>
			</footer>
		);
}

export default Footer;