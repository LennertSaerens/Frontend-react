import React from 'react'

const AddLaptime = () => {
    return (
        <div className="add-laptime">
            <h1>Add Laptime</h1>
            <form action="#" method="post">
                <p>
                    <label for="circuit">Circuit:</label>
                    <input type="text" id="circuit" name="circuit" required></input>
                </p>
                <p>
                    <label for="laptime">Laptime:</label>
                    <input
                        type="text"
                        id="laptime"
                        name="laptime"
                        pattern="[0-6]?[0-9]:[0-5][0-9]:[0-9][0-9][0-9]"
                        required
                    />
                </p>
                <p>
                    <label htmlFor="condition">Condition:</label>
                    <select name="condition" id="condition">
                        <option value="S">Sunny</option>
                        <option value="C">Cloudy</option>
                        <option value="R">Rainy</option>
                    </select>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Add laptime" className="styledbutton"></input>
                </div>
            </form>
        </div>
    )
}

export default AddLaptime
