import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "https://marvel-app-comics.herokuapp.com";

ReactDOM.render(
	<Provider store={store}>
		{/* <React.StrictMode> */}
			<Auth0Provider
				domain="dev-8dlcilpo.us.auth0.com"
				clientId="dNHRYGKTvuFiLFozoy5y7vUawIXvbpZc"
				redirectUri={window.location.origin}
				redirect_uri={window.location.origin}
			>
				<App />
			</Auth0Provider>
		{/* </React.StrictMode> */}
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
