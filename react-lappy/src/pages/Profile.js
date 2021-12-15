import React, { useState } from "react"
import profilepictest from "../images/profilepictest.png"

const Profile = () => {

    const [user, setUser] = useState(
        { id: 1, username: "Snelle Lenny", firstname: "Lennert", lastname: "Saerens", joined: "24/09/2021", numfollowers: 69 }
    )

    const [userLaptimes, setUserLaptimes] = useState(
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
            }
        ]
    )

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

    return (
        <div className="profile-content">
            <div className="profilepic">
                <img src={profilepictest} alt="Profile picture" />
            </div>
            <div className="user-info">
                <h2>Personal information</h2>
                <p>Username: {user.username}</p>
                <p>Name: {user.firstname} {user.lastname}</p>
                <p>Joined on: {user.joined}</p>
                <p>Followers: {user.numfollowers}</p>
            </div>
            <div className="user-laptimes">
                <h2>Your laptimes</h2>
                <div className="user-laptime-table">
                    <table>
                        <tr>
                            <th>Laptime</th>
                            <th>Circuit</th>
                            <th>Conditions</th>
                        </tr>
                        {userLaptimes.map((laptime) => (
                            <tr>
                                <td>{laptime.time}</td>
                                <td>{laptime.circuit}</td>
                                <td>{getWeather(laptime.weather)}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile
