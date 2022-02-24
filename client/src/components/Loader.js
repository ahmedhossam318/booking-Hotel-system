import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#000");
	const override = `
		display: block;
		margin: 0 auto;
		border-color: red;
	`;

	return (
		<div style={{ marginTop: "200px" }}>
			<div className="sweet-loading">
				<HashLoader color={color} loading={loading} css={override} size={150} />
			</div>
		</div>
	);
};

export default Loader;
