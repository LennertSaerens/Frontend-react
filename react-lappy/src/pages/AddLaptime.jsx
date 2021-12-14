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
                    <input type="text" id="laptime" name="laptime" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Add laptime"></input>
                </div>
            </form>
        </div>
    )
}

export default AddLaptime
