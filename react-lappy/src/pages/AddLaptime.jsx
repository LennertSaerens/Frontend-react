import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const AddLaptime = ({auth, id}) => {

    const [circuits, setCircuits] = useState([
    ])

    const [currentCircuit, setCurrentCircuit] = useState()

    const [time, setTime] = useState()

    const [weather, setWeather] = useState()

    const [fetched, setFetched] = useState(false)

    let History = useHistory();

    if (!fetched) fetch("http://127.0.0.1:8000/api/circuits/").then((res) => res.json()).then(data => {setCircuits(data); setFetched(true); console.log(data)})

    const handleSubmit = (event) => {
        event.preventDefault()
        // fetch(`http://127.0.0.1:8000/api/circuits/?name=${currentCircuit}`).then ((res) => res.json()).then(data => {setCircuitID(data[0].id); console.log(data)})
        const header = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${auth}`
              };
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({user: id, circuit: currentCircuit, time: time, weather: weather})
            };
        console.log(requestOptions.body)
            fetch("http://127.0.0.1:8000/api/laps/", requestOptions)
            History.push(`/profile/${id}`)
        }

    return (
        <div className="add-laptime">
            <h1>Add Laptime</h1>
            <form onSubmit={handleSubmit} method="post">
                <p>
                    <label for="circuit">Circuit:</label>
                    <select name="circuit" id="circuit" onChange={e => setCurrentCircuit(e.target.value)}>
                        <option selected value={""}></option>
                        {circuits.map((circuit) => (
                            <option value={circuit.id}>{circuit.name}</option>
                        ))}
                    </select>
                </p>
                <p>
                    <label for="laptime">Laptime:</label>
                    <input
                        type="text"
                        id="laptime"
                        name="laptime"
                        pattern="[0-5]?[0-9]:[0-5][0-9]:[0-9][0-9][0-9]"
                        required
                        onChange={e => setTime(e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="condition">Condition:</label>
                    <select name="condition" id="condition" onChange={e => setWeather(e.target.value)}>
                    <option selected value={""}></option>
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
