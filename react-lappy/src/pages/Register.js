import React, { useState } from "react"

import { useHistory } from "react-router-dom";

const Register = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    let History = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const header = {
            'Content-Type': 'application/json',
          };
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ username: username, password: password, email: email, first_name: firstName, last_name: lastName})
        };
        
        
          fetch("http://127.0.0.1:8000/api/users/", requestOptions).then ((res) => res.json()).then(data => console.log(data)).catch(console.log("error"))
          History.push("/")
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" onChange={e => setFirstName(e.target.value)} required></input>
                </p>
                <p>
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" onChange={e => setLastName(e.target.value)} required></input>
                </p>
                <p>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} required></input>
                </p>
                <p>
                    <label htmlFor="uname">Username:</label>
                    <input type="text" id="uname" onChange={e => setUserName(e.target.value)} name="uname" required></input>
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </p>
                <p>
                    <label htmlFor="reppass">Confirm password:</label>
                    <input type="password" id="reppass" onChange={e => setPassword(e.target.value)} name="reppass" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Register" className="styledbutton"></input>
                </div>
            </form>
        </div>
    )
}

export default Register
