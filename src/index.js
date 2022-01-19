import { Result } from "postcss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./index.css";

ReactDOM.render(
	<ResultContextProvider>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</ResultContextProvider>,
	document.getElementById("root")
);
