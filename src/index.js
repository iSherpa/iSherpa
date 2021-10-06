import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
<Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_CLIENT_ID}
  redirectURI={window.location.origin}
>
  <App />
</Auth0Provider>,
  document.getElementById('root')
)
// process.env.REACT_APP_AUTH_REDIRECT_URI