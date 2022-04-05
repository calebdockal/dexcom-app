import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

// Component Imports
import App from "./App";
import Home from "./components/screens/Home";
import Dashboard from "./components/screens/Dashboard";
import Graph from "./components/screens/Graph";

// Entry Point to application
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Graph" element={<Graph />}></Route>
          <Route path="Analysis" element={<p>Analysis</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
