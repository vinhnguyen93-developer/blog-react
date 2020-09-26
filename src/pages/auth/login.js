import React, {useRef} from "react";
import { useHistory } from "react-router-dom"
import ApiService from "../../shared/services/apiService";
import "./styles.css";

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        ApiService.axios(
            "/auth/login",
            {
                method: "POST",
                payload: data
            }
        ).then(({data}) => {
            localStorage.setItem("token", data.data.token)
            history.push("/");

        }).catch(err => console.log(err))
    }

    return (
        <div className="login-form">
            <div className="container">
                <div className="col">
                    <h2>Login</h2>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <input className="text-box" ref={emailRef} type="text" placeholder="Email" />
                        <input className="text-box" ref={passwordRef} type="password" placeholder="Password" />
                        <button className="btn" type="submit">Login</button>
                    </form>
                    <p className="text-form">Not register? <a href="/register">Create an account</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;