import React from "react";

const Travel = ({ destination, country, image, distance }) => (
	<div>
		<h1>{destination}</h1>
		<h3>{country}</h3>
		<img src={image} alt={destination} />
		<h4>{distance}</h4>
	</div>
);

export default Travel;

