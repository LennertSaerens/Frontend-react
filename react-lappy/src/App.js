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


function App() {
  const [auth, setAuth] = useState(null)
  const [id, setID]= useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar id={id}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login auth={auth} id={id} setAuth={setAuth} setID={setID}/>
            </Route>
            <Route path="/register">
              <Register auth={auth}/>
            </Route>
            <Route path="/profile/:id">
              <Profile loggedid={id}/>
            </Route>
            <Route path="/circuitMap">
              <Circuitmap />
            </Route>
            <Route path="/addcircuit">
              <AddCircuit auth={auth} id={id}/>
            </Route>
            <Route path="/addlaptime">
              <AddLaptime auth={auth} id={id}/>
            </Route>
            <Route path="/modifycircuit">
              <ModifyCircuit />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
