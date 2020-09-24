import { clientId } from "./secrets";
import React, { useState } from "react";
import logo from "./logo.svg";
import { GoogleLogin } from "react-google-login";
import "./App.css";

function App() {
  const googlePeopleUrl =
    "https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses";

  const getData = async (url, accessToken) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const responseGoogle = ({ accessToken }) => {
    getData(googlePeopleUrl, accessToken)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <p>{clientId}</p>
      <GoogleLogin
        clientId="952301080115-odt17vabnr32itq23pir8357fdd81e9k.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
// Client ID
// 762892394508-23fcllqa715aj6cqd7egf71r8sm3pp88.apps.googleusercontent.com

// Client Secret
// xZL5DJRFbmniMRpQbQVfkwbq

// API Key AIzaSyBCq7FDBc8DsI7jLfI5p21FKlntS7gVHfo
