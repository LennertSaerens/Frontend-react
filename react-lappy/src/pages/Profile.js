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



    return (
        <div className="profile-content">
            <div className="profilepic">
                <img src= {profilePic} alt="Profile picture" />
            </div>
            <div className="user-info">
                <p>Username: {user.username}</p>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>Joined on: {user.date_joined}</p>
                <p>Followers: {followers}</p>
            </div>
        </div>
    )
}

export default Profile
