import React, { useState } from 'react'


const ModifyCircuit = ({ circuit, auth}) => {
    const [name, setName] = useState()
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
