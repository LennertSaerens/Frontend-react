import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import profilepictest from "../images/profilepictest.png"
import { useParams } from "react-router-dom";
import "../styles/profile.css"

const Profile = ({loggedid, auth, getWeather}) => {

    const visitid = useParams()

    const[profilePic, setProfilePic] = useState()

    const[followers, setFollowers] = useState()

    const [userLaptimes, setUserLaptimes] = useState(
        [
            {
                "id": 1,
                "time": "01:25:36",
                "circuit": 3,
                "user": 30,
                "weather": "R",
                "uploaded_on": "2021-11-26T12:30:55.496862Z"
            },
            {
                "id": 2,
                "time": "01:12:13",
                "circuit": 3,
                "user": 30,
                "weather": "S",
                "uploaded_on": "2021-11-26T15:18:05.596702Z"
            },
            {
                "id": 3,
                "time": "05:04:00",
                "circuit": 3,
                "user": 23,
                "weather": "R",
                "uploaded_on": "2021-11-26T15:35:07.476001Z"
            }
        ]
    )

    var id = visitid.id

    const [user, setUser] = useState(
         { id: 1, username: "default", first_name: "Lennert", last_name: "Saerens", date_joined: "24/09/2021"}
    )

    const url = "http://127.0.0.1:8000/api/users/"

    if (id != null && user.username == "default") {fetch(url.concat(id)).then((res) => res.json()).then((data) => {setUser(data); 
   //     console.log(data)
    })}

    const [fetchedFollowers, setFetchedFollowers] = useState(false)

    const [fetchedLaps, setFetchedLaps] = useState(false)

    const [fetchedCircuits, setFetchedCircuits] = useState(false)

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

    const [currentFollow, setCurrentFollow] = useState()

    const [fetchedFollow, setFetchedFollow] = useState(false)
    
    const followurl = "http://127.0.0.1:8000/api/follow/"


    const avatarurl = "http://127.0.0.1:8000/api/profiles/"

    fetch(avatarurl.concat(user.userprofile)).then(res => res.json()).then(data => {setProfilePic(data.avatar)})

    if (!fetchedFollowers) fetch(followurl.concat(`?user=${id}`)).then(res => res.json()).then(data => {setFollowers(data.length); setFetchedFollowers(true)})
    
    if (!fetchedLaps) fetch(`http://127.0.0.1:8000/api/laps/?user=${id}`).then(res => res.json()).then(data => {setUserLaptimes(data); setFetchedLaps(true)})

    if (!fetchedCircuits) fetch(`http://127.0.0.1:8000/api/circuits/`).then(res => res.json()).then(data => {setCircuits(data); setFetchedCircuits(true)} )

    const getName = (id) => {
        if (circuits.filter((circuit) => circuit.id == id).length != 0)
        {
            return circuits.filter((circuit) => circuit.id == id)[0].name ;


        }
        else return id
    }
    
   // if (!fetchedFollow) fetch(followurl.concat(`?user=${id}&by=${loggedid}`)).then(res => res.json()).then(data => {setCurrentFollow(data); setFetchedFollow(true)})
    
    const [ownProfile, setOwnProfile] = useState(true)

    // if (id != loggedid) setOwnProfile(false) 
    const [following, setFollowing] = useState(false)

    // useEffect(() => (currentFollow ? setFollowing(true) : setFollowing(false)), [currentFollow])

    function follow() {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${auth}`
          };
          const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ user: loggedid, followed: visitid})
        };
        fetch("http://127.0.0.1:8000/api/follow/", requestOptions).then(res => res.json()).then(data => setCurrentFollow(data))
    }

    function unfollow(){
        setCurrentFollow()
    }

    return (
        <>
            <div className="profile-content">
                <div className="profilepic">
                    <img src={profilePic} alt="Avatar uploaded by user" />
                </div>
                <div className="user-info">
                    <h2>Personal information</h2>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Joined on: {user.date_joined.slice(0,10)}</p>
                    <p>Followers: {followers}</p>
                </div>
                <div className="user-laptimes">
                    <h2>Laptimes</h2>
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
                                    <td>{getName(laptime.circuit)}</td>
                                    <td>{getWeather(laptime.weather)}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
            <div className="buttons">
                {ownProfile
                    ? <div className="add">
                        <Link to="/addcircuit" class="styledbutton">Add Circuit</Link>
                        <Link to="/addlaptime" class="styledbutton">Add Laptime</Link>
                    </div>
                    : following
                        ? <div className="follow">
                            <button className="styledbutton" onClick={unfollow}>Unfollow</button>
                        </div>
                        : <div className="follow">
                            <button className="styledbutton" onClick={follow}>Follow</button>
                        </div>
                }
            </div>
        </>
    )
}

export default Profile
