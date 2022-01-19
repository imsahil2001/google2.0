import React from "react";
import { Rings } from "react-loader-spinner";

export const Loading = () => {
	return (
		<div className="flex justify-center items-center">
			<Rings color="#5B92E5" arialLabel="loading-indicator" />
		</div>
	);
};
