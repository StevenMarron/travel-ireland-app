import React from "react";
function Accommodation(props){
	return(
		<div>
			<h1>Type of accommodation? {props.tags[1]}<br />{props.name}</h1>
			<h2>Where? {props.addressRegion}</h2>
			<p>Website: <a href={props.url} target="_blank">{props.url}</a>
				<br />
				Phone number: <a href={"tel:" + props.telephone} target="_blank">{props.telephone}</a>
			</p>
		</div>
	);
}
export default Accommodation;