import React, {useState} from 'react'

const Logout = () => {

    const [succes, setSucces] = useState(false)

    const handleLogout = () => {
        console.log("Logout succesfull")
        setSucces(true)
    }

    return (
        <div className="logout-content">
            <button onClick={handleLogout} className="styledbutton">Logout</button>
            <p>{succes ? "Logout succesfull" : "Click button to logout"}</p>
        </div>
    )
}

export default Logout
