import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const ModifyCircuit = ({ circuit, auth}) => {
    const [name, setName] = useState()
    let History = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${auth}`
          };
          const requestOptions = {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify({ name: name})
        };
        fetch(`http://127.0.0.1:8000/api/circuits/${circuit.id}/`, requestOptions)
        History.push("/circuitmap")
    }
    return (
        <div className="modify-circuit">
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}/>
                </p>
                <input type="submit" className='styledbutton'/>
            </form>
        </div>
    )
}

export default ModifyCircuit
