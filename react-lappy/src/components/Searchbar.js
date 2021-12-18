import React from "react"

/**
 * 
 * @returns Code for a simple search bar. Is a subcomponent of the navbar.
 */
const Searchbar = () => {
    return (
        <form action='#' method="get">
            <div className="searchbar">
                <label htmlFor="search">Search: </label>
                <input type="text" id="search" name="search"></input>
                <input type="submit" value="Search!" className="styledbutton"></input>
            </div>
        </form>
    )
}

export default Searchbar
