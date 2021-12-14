import React, {useEffect} from 'react'
import checkeredFlag from "../images/checkeredFlag.png"
import { flagStyle } from '../styles/flagstyle'

const Flag = ({ circuit, setCurrentCircuit }) => {

    return (
        <div className="flag" onClick={() => setCurrentCircuit(circuit)}> 
            <img src={checkeredFlag} alt="Checkered Flag"  style={flagStyle} />
        </div>
    )
}

export default Flag
