import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Flag from "../components/Flag"
import mapStyle from "../styles/GoogleMapStyle.json"
import { Link } from "react-router-dom"
import "../styles/circuitmap.css"

const Circuitmap = ({getWeather, compareLaptimes, setCircuit}) => {

    // All circuits recieved from the DB. Used for showing them on the map
    const [circuits, setCircuits] = useState([
        // {
        //     id: 1,
        //     name: "Spa-Francoshamps",
        //     latitude: 50.436430,
        //     longitude: 5.970263
        // }, {
        //     id: 2,
        //     name: "Zolder",
        //     latitude: 50.990359,
        //     longitude: 5.257508 
        // }
    ])

    const [users, setUsers] = useState([])

    const [fetchedCircuits, setFetchedCircuits] = useState(false)

    const getUsername = (userid) => {
        if (users.filter((user) => user.id == userid).length != 0)
         return users.filter((user) => user.id == userid)[0].username;
         else return userid
    }

    const [fetchedUsers, setFetchedUsers] = useState(false)

    if (!fetchedCircuits) fetch("http://127.0.0.1:8000/api/circuits/").then((res) => res.json()).then(data => {setCircuits(data); setFetchedCircuits(true);})

    if (!fetchedUsers) fetch("http://127.0.0.1:8000/api/users/").then((res) => res.json()).then(data => {setUsers(data); setFetchedUsers(true);})

    // Circuit currently selected by the user, used to display circuit profile
    const [currentCircuit, setCurrentCircuit] = useState({
        id: 1,
        name: "None Selected",
        coordinates: { lat: 50.436430, lng: 5.970263 }
    })

    const [currentCircuitInfo, setCurrentCircuitInfo] = useState({
        title: "Title",
        summary: "Summary",
        link: "https://wikipedia.com"
    })

    const [laptimes, setLaptimes] = useState(
        [
        ]
    )


    // Constant used for setting the center of the map. Coordinates of 
    // Circuit De Spa-Francochamps aka the best circuit in the world.
    const center = {
        lat: 50.436430,
        lng: 5.970263,
    };

    return (
        <div className="circuitMap-page">
            {/* div used to contain the google map. */}
            <div className="google-map" style={{ width: "80vw", height: "70vh" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB30eXPqHYsFqyzdNe3vQQi_8ifaKO-vm0" }}
                    defaultCenter={center}
                    center={center}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={{
                        disableDefaultUI: true,
                        styles: mapStyle,
                    }}
                    onChange={''}
                    onChildClick={''}
                >
                    {/* Map over all circuits and create a flag on the map for each circuit. */}
                    {circuits.map((circuit) => (
                        <Flag
                            lat={circuit.latitude}
                            lng={circuit.longitude}
                            circuit={circuit}
                            setCurrentCircuit={setCurrentCircuit}
                            setLaptimes={setLaptimes}
                            setEditCircuit={setCircuit}
                            setInfo = {setCurrentCircuitInfo}
                        />
                    ))}
                </GoogleMapReact>
            </div>
            {/* Circuit profile */}
            <div className="currentCircuit">
                <h1>Selected Circuit: {currentCircuit.name}</h1>
                <div className="current-circuit-content">
                    <div className="wiki">
                        <h3>{currentCircuitInfo.title}</h3>
                        <p>{currentCircuitInfo.summary}</p>
                        <a href={currentCircuitInfo.link}>More Info</a>
                    </div>
                    <div className="top-laptimes">
                        <h2>Top 10 laptimes for this circuit:</h2>
                        <div className="table">
                            <table>
                                <tr>
                                    <th>User</th>
                                    <th>Laptime</th>
                                    <th>Conditions</th>
                                </tr>
                                {laptimes.sort(compareLaptimes).slice(0, 10).map((laptime) => (
                                    <tr>
                                        <td>{getUsername(laptime.user)}</td>
                                        <td>{laptime.time}</td>
                                        <td>{getWeather(laptime.weather)}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className="edit-circuit">
                        <Link to="/modifycircuit" class="styledbutton">Edit Circuit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circuitmap
