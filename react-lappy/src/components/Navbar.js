import React from "react"
import { Link } from "react-router-dom"
import Profile from "../pages/Profile"
import Searchbar from "./Searchbar"

const Navbar = ({id}) => {
    return (
        <nav className="navigation">
            <h1>Lappy.gp</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to= {`/profile/${id}`}>Profile</Link>
                <Link to="/circuitMap">Circuit Map</Link>
            </div>
            <div className="search">
                <Searchbar />
            </div>
        </nav>
    )
}

export default Navbar
