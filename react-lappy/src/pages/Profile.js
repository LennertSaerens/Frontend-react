import React, { useState } from "react"
import profilepictest from "../images/profilepictest.png"

const Profile = () => {

    const [user, setUser] = useState(
        { id: 1, username: "Snelle Lenny", firstname: "Lennert", lastname: "Saerens", joined: "24/09/2021", numfollowers: 69 }
    )

    return (
        <div className="profile-content">
            <div className="profilepic">
                <img src={profilepictest} alt="Profile picture" />
            </div>
            <div className="user-info">
                <p>Username: {user.username}</p>
                <p>Name: {user.firstname} {user.lastname}</p>
                <p>Joined on: {user.joined}</p>
                <p>Followers: {user.numfollowers}</p>
            </div>
        </div>
    )
}

export default Profile
