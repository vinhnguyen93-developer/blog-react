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
                    <p className="text-form">Not register? <a href="#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;