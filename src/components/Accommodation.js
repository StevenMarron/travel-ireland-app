import React from "react";
import Accomm from "../styles/Accomm.css";

function Accommodation(props){
	return(
		<div className="accomm-card">
			<div className="image">
				<img src={props.image} width="100" height="auto" />
			</div>
			<div className="card-details">
				<h2 className="standout">{props.name}</h2>
				<p>({props.tags[1]})</p>
				<h3 className="standout">{props.addressLocality}, {props.addressRegion}</h3>
				<p>Web: <a href={props.url} target="_blank">{props.url}</a></p>
				<p>Phone: <a href={"tel:" + props.telephone} target="_blank">{props.telephone}</a></p>
			</div>
		</div>
	);
}

export default Accommodation;