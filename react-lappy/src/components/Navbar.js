import React, { useState } from "react"
import { Link } from "react-router-dom"
import Profile from "../pages/Profile"
import Searchbar from "./Searchbar"
import "../styles/navigation.css"

/**
 * 
 * @returns Code for the navbar at the top of the page. 
 */
const Navbar = ({id}) => {
    
    return (
        <nav className="navigation">
            <h1>Lappy.gp</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/circuitMap">Circuit Map</Link>
                {(id != null)
                    ? <Link to={`/profile/${id}`}>Profile</Link>
                    : <Link to="/login">Login</Link>
                }
                <Link to={(id != null) ? "/logout" : "/register"}>{(id != null) ? "Logout" : "Register"}</Link>
            </div>
            {/* <div className="search">
                <Searchbar />
            </div> */}
        </nav>
    )
}

export default Navbar
