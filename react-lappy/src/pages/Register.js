import React from "react"

const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form action="#">
                <p>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" required></input>
                </p>
                <p>
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" required></input>
                </p>
                <p>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required></input>
                </p>
                <p>
                    <label htmlFor="uname">Username:</label>
                    <input type="text" id="uname" name="uname" required></input>
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </p>
                <p>
                    <label htmlFor="reppass">Confirm password:</label>
                    <input type="password" id="reppass" name="reppass" required></input>
                </p>
                <div className="submit-container">
                    <input type="submit" value="Register" className="styledbutton"></input>
                </div>
            </form>
        </div>
    )
}

export default Register
