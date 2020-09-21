import React, {useRef} from "react";
import "./styles.css";

import ApiService from "../../shared/services/apiService";

const Register = (props) => {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let data = {
            email: emailRef.current.value,
            displayName: nameRef.current.value,
            password: passwordRef.current.value
        }

        ApiService.axios(
            "/auth/register",
            {
                method: "POST",
                payload: data
            }
        ).then(res => {
            window.location.assign("/login")
        }).catch(err => console.log(err))
    }


    return (
        <div className="login-form">
            <div className="container">
                <div className="col">
                    <h2>Register</h2>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <input className="text-box" ref={emailRef} type="email" placeholder="Email" />
                        <input className="text-box" ref={nameRef} type="text" placeholder="Name" />
                        <input className="text-box" ref={passwordRef} type="password" placeholder="Password" />
                    <button type="submit" className="btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;