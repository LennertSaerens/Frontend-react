import React from "react"
import { Link } from "react-router-dom"
import Profile from "../pages/Profile"
import Searchbar from "./Searchbar"

const Navbar = ({id}) => {

    var option1;

    var option2;

    if (id != null){ //logged in
    option1 = <Link to= {`/profile/${id}`}>Profile</Link>
    }
    else option1 = <Link to="/login">Login</Link>
    
    return (
        <nav className="navigation">
            <h1>Lappy.gp</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {option1}
                <Link to="/register">Register</Link>
                <Link to="/circuitMap">Circuit Map</Link>
            </div>
            <div className="search">
                <Searchbar />
            </div>
        </nav>
    )
}

export default Navbar
