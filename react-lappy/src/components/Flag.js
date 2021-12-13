import React from 'react'
import checkeredFlag from "../images/checkeredFlag.png"
import { flagStyle } from '../styles/flagstyle'

const Flag = ({ name }) => {
    return (
        // code for the flag
        <div className="flag" onClick={() => console.log(name)}> 
            <img src={checkeredFlag} alt="Checkered Flag"  style={flagStyle} />
        </div>
    )
}

export default Flag
