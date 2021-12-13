import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Circuitmap from "./pages/Circuitmap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react";

function App() {
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
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/circuitMap">
              <Circuitmap />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
