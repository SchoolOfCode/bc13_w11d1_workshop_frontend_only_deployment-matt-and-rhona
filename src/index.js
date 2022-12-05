import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-e1uiaw6aq7v4z8op.uk.auth0.com"
    clientId="3dVDJQE68M2iUcz24Jw9SP5qMUwBdzBU"
    redirectUri="https://beautiful-banana.netlify.app/"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
