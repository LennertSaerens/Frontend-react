import React, { useState } from 'react'

const AddCircuit = ({auth, id}) => {
    const [name, setName] = useState()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(auth)
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${auth}`
          };
          const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ name: name, created_by: id})
        };
        fetch("http://127.0.0.1:8000/api/circuits/", requestOptions)
    }
    

    return (
        <div className="add-circuit">
            <h1>Add circuit</h1>
            <form onSubmit={handleSubmit} >
                <p>
                    <label for="name">Name:</label>
                    <input type="text" id="name" onChange={e => setName(e.target.value)} name="name" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Add circuit" className="styledbutton"></input>
                </div>
            </form>
        </div>
    )
}

export default AddCircuit
