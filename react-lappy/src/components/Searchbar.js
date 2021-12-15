import React from "react"

/**
 * 
 * @returns Code for a simple search bar. Is a subcomponent of the navbar.
 */
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
