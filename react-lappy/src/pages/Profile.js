import React, { useEffect, useState } from "react"
import profilepictest from "../images/profilepictest.png"
import { useParams } from "react-router-dom";

const Profile = ({loggedid}) => {

    const visitid = useParams()

    const[profilePic, setProfilePic] = useState(profilepictest)

    const[followers, setFollowers] = useState(0)

    var id = visitid.id

    const [user, setUser] = useState(
         { id: 1, username: "default", first_name: "Lennert", last_name: "Saerens", date_joined: "24/09/2021"}
    )

    const url = "http://127.0.0.1:8000/api/users/"

    if (id != null && user.username == "default") {fetch(url.concat(id)).then((res) => res.json()).then((data) => {setUser(data); 
   //     console.log(data)
    })}

    const avatarurl = "http://127.0.0.1:8000/api/profiles/"
    
    fetch(avatarurl.concat(user.userprofile)).then(res => res.json()).then(data => setProfilePic(data.avatar))

    const followurl = "http://127.0.0.1:8000/api/follow/"

    fetch(followurl.concat(`?user=${id}`)).then(res => res.json()).then(data => setFollowers(data.length))

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
        <>
            <div className="profile-content">
                <div className="profilepic">
                    <img src={profilePic} alt="Profile picture" />
                </div>
                <div className="user-info">
                    <h2>Personal information</h2>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Joined on: {user.date_joined}</p>
                    <p>Followers: {followers}</p>
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
            <div className="add">
                <a href="/addcircuit" class="styledbutton">Add Circuit</a>
                <a href="/addlaptime" class="styledbutton">Add Laptime</a>
            </div>
        </>
    )
}

export default Profile
