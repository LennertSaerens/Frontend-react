import React from "react"

const Searchbar = () => {
    return (
        <form action='#' method="get">
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" name="search"></input>
            <input type="submit" value="Search!"></input>
        </form>
    )
}

export default Searchbar
