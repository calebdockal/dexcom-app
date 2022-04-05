import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/App.css";

// MUI imports here
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Component imports here
import Dashboard from "./Dashboard";
import Navbar from "../header/Navbar";
import Footer from "../footer/footer";
import getCurrentTime from "../../helpers/getTime";

// redux imports here
import { useSelector, useDispatch } from "react-redux";

// This is the main component of the application.

function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [openWindow, setOpenWindow] = useState(null);
  const [authToken, setAuthToken] = useState("");
  const [bloodSugarData, setBloodSugarData] = useState([]);

  const getAuthToken = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", `${process.env.REACT_APP_CLIENT_ID}`);
    urlencoded.append(
      "client_secret",
      `${process.env.REACT_APP_CLIENT_SECRET}`
    );
    urlencoded.append("code", `${window.location.search.slice(6, 38)}`);
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("redirect_uri", "http://localhost:3000");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://sandbox-api.dexcom.com/v2/oauth2/token", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setAuthToken(response.access_token);
      })
      .then(() => {
        console.log("Auth token: " + authToken);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log("Bg" + bloodSugarData);
  }, []);

  useEffect(() => {
    if (authToken === "") {
      getAuthToken();
    } else {
      console.log("auth token is " + authToken);
    }
  }, []);

  const getBloodSugarData = (token) => {
    console.log("running function");

    var myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${authToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "https://sandbox-api.dexcom.com/v2/users/self/egvs?startDate=2020-06-16T15:30:00&endDate=2020-06-16T15:45:00",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setBloodSugarData(data.egvs);
        console.log(data);
      })
      .catch((error) => console.log("error " + error));
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="head">
        <Navbar />
      </div>
      <div className="body">
        <div
          style={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <Button
            onClick={(authToken) => {
              getBloodSugarData(authToken);
            }}
            variant="contained"
          >
            Get Blood Sugar
          </Button>
        </div>
        <Dashboard data={bloodSugarData} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
