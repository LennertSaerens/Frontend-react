import React, { useState } from "react"



const Login = ({auth, id, setAuth, setID}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const header = {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
          };
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ username: username, password: password })
        };
        const usersURL = "http://127.0.0.1:8000/api/users/?username="
        var authorized = true
        console.log("in process")
        fetch("http://127.0.0.1:8000/auth/", requestOptions).then ((res) => res.json()).then(data => {setAuth(data.token); if (data.token) {
            console.log("AUTHORIZED")
          fetch(usersURL.concat(username)).then ((res) => res.json()).then(data => {setID(data[0].id);})
        }}).catch(error => {console.log(error);})
          
          console.log(auth)
          console.log(id)
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label for="uname">Username:</label>
                    <input type="text" onChange={e => setUserName(e.target.value)} id="uname" name="uname" required></input>
                </p>
                <p>
                    <label for="password">Password:</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} id="password" name="password" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Log in"></input>
                </div>
            </form>
            {/* Option to register in case the user doesnt have an account. */}
            <p>Or register via <a href="/register">this</a> link.</p>
        </div>
    )
}

export default Login
