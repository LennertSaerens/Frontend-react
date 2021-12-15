import React, { useState } from "react"
import profilepictest from "../images/profilepictest.png"

const Profile = ({id}) => {

    const [user, setUser] = useState(
        
         { id: 1, username: "default", first_name: "Lennert", last_name: "Saerens", date_joined: "24/09/2021", numfollowers: 69 }
    )

    const url = "http://127.0.0.1:8000/api/users/"

    const userData = useState()

    if (id != null && user.username == "default") {fetch(url.concat(id)).then((res) => res.json()).then((data) => {setUser(data);})}

    return (
        <div className="profile-content">
            <div className="profilepic">
                <img src={profilepictest} alt="Profile picture" />
            </div>
            <div className="user-info">
                <p>Username: {user.username}</p>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>Joined on: {user.date_joined.substring(0,10)}</p>
                <p>Followers: {user.numfollowers}</p>
            </div>
        </div>
    )
}

export default Profile
