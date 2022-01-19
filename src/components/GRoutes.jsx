import React from "react";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import { Results } from "./Results";
import Search from "./Search";
const GRoutes = () => {
	return (
		<div className="p-4">
			<Routes>
				<Route exact path="/" element={<Navigate to="/search" />} />

				<Route exact path="/search" element={<Results />} />
				<Route exact path="/images" element={<Results />} />
				<Route exact path="/videos" element={<Results />} />
				<Route exact path="/news" element={<Results />} />
			</Routes>
		</div>
	);
};

export default GRoutes;
