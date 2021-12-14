import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Flag from "../components/Flag"
import mapStyle from "../styles/GoogleMapStyle.json"

const Circuitmap = () => {

    // All circuits recieved from the DB. Used for showing them on the map
    const [circuits, setCircuits] = useState([
        {
            id: 1,
            name: "Spa-Francoshamps",
            coordinates: { lat: 50.436430, lng: 5.970263 }
        }, {
            id: 2,
            name: "Zolder",
            coordinates: { lat: 50.990359, lng: 5.257508 }
        }
    ])

    // Circuit currently selected by the user, used to display circuit profile
    const [currentCircuit, setCurrentCircuit] = useState({
        id: 1,
        name: "Spa-Francoshamps",
        coordinates: { lat: 50.436430, lng: 5.970263 }
    })

    // Constant used for setting the center of the map. Coordinates of 
    // Circuit De Spa-Francochamps aka the best circuit in the world.
    const center = {
        lat: 50.436430,
        lng: 5.970263,
    };

    return (
        <div className="circuitMap-page">
            {/* Link to page where user can add new circuits. */}
            <div className="add-circuit-link">
                <p>Add a circuit via <a href="/addcircuit">this</a> link.</p>
            </div>
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
                        <Flag lat={circuit.coordinates.lat} lng={circuit.coordinates.lng} circuit={circuit} setCurrentCircuit={setCurrentCircuit} />
                    ))}
                </GoogleMapReact>
            </div>
            {/* Circuit profile */}
            <div className="currentCircuit">
                <h1>Selected Circuit:</h1>
                <p>{currentCircuit.name}</p>
            </div>
        </div>
    )
}

export default Circuitmap
