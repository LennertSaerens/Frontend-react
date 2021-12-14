import React from 'react'
import checkeredFlag from "../images/checkeredFlag.png"
import { flagStyle } from '../styles/flagstyle'

/**
 * 
 * @props Takes in the circuit object for which the flag is created on the map. setCurrencircuit is a procedure used to modify
 *        the state of the Circuitmap page.
 * @returns Shows a flag on the map. This flag is clickable and makes the page display information about the circuit that was clicked.
 */
const Flag = ({ circuit, setCurrentCircuit }) => {
    return (
        <div className="flag" onClick={() => setCurrentCircuit(circuit)}> 
            <img src={checkeredFlag} alt="Checkered Flag"  style={flagStyle} />
        </div>
    )
}

export default Flag