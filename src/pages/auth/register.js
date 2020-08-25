import React from "react";
import "./styles.css"

const Register = (props) => {
    return (
        <div className="login-form">
            <div className="container">
                <div className="col">
                    <h2>Register</h2>
                    <form className="form">
                        <input className="text-box" type="text" placeholder="Email" />
                        <input className="text-box" type="text" placeholder="Name" />
                        <input className="text-box" type="password" placeholder="Password" />
                    </form>
                    <button className="btn">Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;