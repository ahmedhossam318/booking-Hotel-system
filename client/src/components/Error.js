import React from "react";

const Error = ({ message }) => {
	return (
		<div className="col-md-11">
			<div className="alert alert-danger" role="alert">
				{message}
			</div>
		</div>
	);
};

export default Error;
