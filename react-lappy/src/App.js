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
  const [auth, setAuth] = useState(null)
  const [id, setID]= useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login/:id">
              <Login auth={auth} id={id} setAuth={setAuth} setID={setID}/>
            </Route>
            <Route path="/register">
              <Register auth={auth}/>
            </Route>
            <Route path="/profile">
              <Profile id={id}/>
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
