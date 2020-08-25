import React from "react";
import "./styles.css";

const Login = (props) => {
    return (
        <div className="login-form">
            <div className="container">
                <div className="col">
                    <h2>Login</h2>
                    <form className="form">
                        <input className="text-box" type="text" placeholder="Email" />
                        <input className="text-box" type="password" placeholder="Password" />
                    </form>
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;