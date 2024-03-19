import React, { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-dtw5lccxhfi7uzjg.us.auth0.com"
      clientId="TfYTlnXTHMrwYj8YfXJ76NEP2YoOwxzr"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </StrictMode>
);