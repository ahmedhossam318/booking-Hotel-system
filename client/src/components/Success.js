import React from "react";

const Success = ({ message }) => {
	return (
		<div className="col-md-11">
			<div className="alert alert-success" role="alert">
				{message}
			</div>
		</div>
	);
};

export default Success;
