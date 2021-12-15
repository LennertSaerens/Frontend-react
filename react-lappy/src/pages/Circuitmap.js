import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Flag from "../components/Flag"
import mapStyle from "../styles/GoogleMapStyle.json"

const Circuitmap = () => {

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

    const [fetched, setFetched] = useState(false)

    if (!fetched) fetch("http://127.0.0.1:8000/api/circuits/").then((res) => res.json()).then(data => {setCircuits(data); setFetched(true); console.log(data)})

    // Circuit currently selected by the user, used to display circuit profile
    const [currentCircuit, setCurrentCircuit] = useState({
        id: 1,
        name: "Spa-Francoshamps",
        coordinates: { lat: 50.436430, lng: 5.970263 }
    })

    const [laptimes, setLaptimes] = useState(
        [
            {
                "id": 1,
                "time": "01:25:36",
                "circuit": 2,
                "user": 30,
                "weather": "R",
                "uploaded_on": "2021-11-26T12:30:55.496862Z"
            },
            {
                "id": 2,
                "time": "01:12:13",
                "circuit": 2,
                "user": 30,
                "weather": "S",
                "uploaded_on": "2021-11-26T15:18:05.596702Z"
            },
            {
                "id": 10,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:35:07.476001Z"
            },
            {
                "id": 11,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:36:04.339638Z"
            },
            {
                "id": 12,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:36:35.179383Z"
            },
            {
                "id": 13,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:37:01.778900Z"
            },
            {
                "id": 14,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:41:24.326584Z"
            },
            {
                "id": 15,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:43:14.085048Z"
            },
            {
                "id": 16,
                "time": "05:04:00",
                "circuit": 2,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:44:29.546047Z"
            }
        ]
    )


    // Constant used for setting the center of the map. Coordinates of 
    // Circuit De Spa-Francochamps aka the best circuit in the world.
    const center = {
        lat: 50.436430,
        lng: 5.970263,
    };

    const getWeather = (symbol) => {
        switch (symbol) {
            case "R":
                return "Rainy"
            case "C":
                return "Cloudy"
            case "S":
                return "Sunny"
        }
    }

    const compareLaptimes = (l1, l2) => {
        if (l1.time < l2.time) {
            return -1
        }
        if (l1.time < l2.time) {
            return 1
        }
        return 0
    }

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
                        />
                    ))}
                </GoogleMapReact>
            </div>
            {/* Circuit profile */}
            <div className="currentCircuit">
                <h1>Selected Circuit: {currentCircuit.name}</h1>
                <div className="current-circuit-content">
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
                                        <td>{laptime.user}</td>
                                        <td>{laptime.time}</td>
                                        <td>{getWeather(laptime.weather)}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circuitmap
