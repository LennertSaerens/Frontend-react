import React from 'react'

const AddCircuit = () => {
    return (
        <div className="add-circuit">
            <h1>Add circuit</h1>
            <form action="#" method="post">
                <p>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Add circuit" className="styledbutton"></input>
                </div>
            </form>
        </div>
    )
}

export default AddCircuit
