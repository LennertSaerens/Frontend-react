import React from "react"
import "../styles/home.css"

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to Lappy.gp!</h2>
            <div className="home-top-content">
                <p>
                    Lappy.gp is a site were you can virtually compete for the best lap time.
                    The process is simple: Create a profile, have fun setting a lap time in your favorite racing game or in real life,
                    fill out the form to upload your lap time and finally, gain eternal glory by having your time shown on our circuit map.
                </p>
            </div>
            <div className="home-content">
                <h3>Features</h3>
                <ul>
                    <li>Set laptimes</li>
                    <li>Compete for the fastest time with your friends</li>
                    <li>Add new circuits</li>
                    <li>Interactive circuit map</li>
                </ul>
            </div>
            <div className="home-content">
                <h3>Adding circuits</h3>
                <p>
                    Can't find the circuit you just set an amazing lap time on? Lappy has got you covered! Simply navigate to your profile
                    and click the "add circuit button". Afterwards, just fill in the name of the circuit you would like to add and Lappy
                    does the rest.
                </p>
            </div>
            <div className="home-content">
                <h3>Interactive Circuit Map</h3>
                <p>
                    Always wanted to browse an interactive map and look up lap times you could easily beat? Head to the circuit map
                    page and you can do just that. Click a flag and you will be greeted by the top 10 laptimes for that circuit.
                    Noticed a mistake in the circuit's name? Simply press the "Edit Circuit" button and you will be navigated to
                    a form where you can correct the mistake.
                </p>
            </div>
        </div>
    )
}

export default Home
