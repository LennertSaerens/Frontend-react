import React from 'react'

const ModifyCircuit = ({ circuit }) => {
    return (
        <div className="modify-circuit">
            <form action="">
                <p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </p>
            </form>
        </div>
    )
}

export default ModifyCircuit
