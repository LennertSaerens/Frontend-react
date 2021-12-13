import React from "react"

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="#" method="post">
                <p>
                    <label for="uname">Username:</label>
                    <input type="text" id="uname" name="uname" required></input>
                </p>
                <p>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
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
