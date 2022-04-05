import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "../../styles/App.css";

const clientId = process.env.REACT_APP_CLIENT_ID;

// initial login screen for dexcom Oauth 2.0
function DexcomLogin(props) {
  useEffect(() => {
    console.log("client Id: " + clientId);
  });
  return (
    <div className="dexcom-login">
      <Container>
        <Button
          variant="contained"
          href={
            `https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=` +
            clientId +
            `&redirect_uri=http://localhost:3000&response_type=code`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Login With Dexcom
        </Button>
      </Container>
    </div>
  );
}

export default DexcomLogin;
