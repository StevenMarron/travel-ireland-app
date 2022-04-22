import React from "react";
import reactRouterDom from "react-router-dom";
import "../App.css";

function Accommodation(props){
	// props are passed from the AccomodationAPI
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
				{/* props are referenced using the props. prepended to the title of the information assigned in the AccomodationAPI component
				and styled via classNames and custom css*/}
			</div>
		</div>
	);
}

export default Accommodation;