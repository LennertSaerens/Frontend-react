import React, { useState } from "react"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"

/**
 * 
 * @returns Code for the navbar at the top of the page. 
 */
const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <nav className="navigation">
            <h1>Lappy.gp</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/circuitMap">Circuit Map</Link>
                {loggedIn
                    ? <Link to="/profile">Profile</Link>
                    : <Link to="/login">Login</Link>
                }
                <Link to={loggedIn ? "/logout" : "/register"}>{loggedIn ? "Logout" : "Register"}</Link>
            </div>
            <div className="search">
                <Searchbar />
            </div>
        </nav>
    )
}

export default Navbar
