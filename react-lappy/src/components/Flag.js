import React, {useState} from 'react'
import checkeredFlag from "../images/checkeredFlag.png"
import { flagStyle } from '../styles/flagstyle'

/**
 * 
 * @props Takes in the circuit object for which the flag is created on the map. setCurrencircuit is a procedure used to modify
 *        the state of the Circuitmap page.
 * @returns Shows a flag on the map. This flag is clickable and makes the page display information about the circuit that was clicked.
 */
const Flag = ({ circuit, setCurrentCircuit, setLaptimes, setEditCircuit, setInfo}) => {
    const [fetchedLaptimes, setFetchedLaptimes] = useState(false)
    const [fetchedInfo, setFetchedInfo] = useState(false)
    return (
        <div className="flag" onClick={() => {
            setCurrentCircuit(circuit)
            setEditCircuit(circuit)
            if (!fetchedLaptimes) 
               fetch(`http://127.0.0.1:8000/api/laps/?circuit=${circuit.id}`).then((res) => res.json()).then(data => {setLaptimes(data); setFetchedLaptimes(true)});
               const header = {
                'Content-Type': 'application/json',
              };
              const requestOptions = {
                method: 'POST',
                headers: header,
                body: JSON.stringify({circuit_name: circuit.name})
            };
            if (!fetchedInfo)
            console.log(requestOptions.body)
                fetch("http://127.0.0.1:8000/api/wiki", requestOptions).then(res => res.json()).then(data => {setInfo(data); setFetchedInfo(true); console.log(data)} )
        }}> 
            <img src={checkeredFlag} alt="Checkered Flag"  style={flagStyle} />
        </div>
    )
}

export default Flag