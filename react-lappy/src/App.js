import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Circuitmap from "./pages/Circuitmap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react";
import AddCircuit from "./pages/AddCircuit";
import AddLaptime from "./pages/AddLaptime";
import ModifyCircuit from "./pages/ModifyCircuit";
import Logout from "./pages/Logout";

function App() {

  const compareLaptimes = (l1, l2) => {
    if (l1.time < l2.time) {
      return -1
    }
    if (l1.time < l2.time) {
      return 1
    }
    return 0
  }

  const getWeather = (symbol) => {
    switch (symbol) {
      case "R":
        return "Rainy"
      case "C":
        return "Cloudy"
      case "S":
        return "Sunny"
      default: throw console.error("Unexpected argument");
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile" >
              <Profile getWeather={getWeather}/>
            </Route>
            <Route path="/circuitMap">
              <Circuitmap getWeather={getWeather} compareLaptimes={compareLaptimes}/>
            </Route>
            <Route path="/addcircuit">
              <AddCircuit />
            </Route>
            <Route path="/addlaptime">
              <AddLaptime />
            </Route>
            <Route path="/modifycircuit">
              <ModifyCircuit />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
