import Nav from "./Nav";
import "./style.css";
import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function() {
    const [login, setLogin] = React.useState({email: "", pass: ""})
    const [message, setMessage] = React.useState("")

    const navigate = useNavigate()

    function sendLoginForm(event) {
        setLogin({
            ...login, 
            [event.target.name]: event.target.value
        })
    }

    function submitLoginForm(event) {
        event.preventDefault()
        axios.post("http://localhost:5000/login", {
            email: login.email,
            pass: login.pass
        })
        .then(res => {
            if (!res.data.user) {
                setMessage(res.data.message)
            }
            else {
                let path = "/";
                navigate(path, {state: {name: res.data.user, isAdmin: res.data.isAdmin, isLoggedIn: res.data.isLoggedIn}})
            }
        })
    }

    return (
        <div>
            <section className="navbar">
                <nav className="nav flex-column">
                    <Nav text="Home" link="/" />
                    <Nav text="Login" link="/login"/>
                    <Nav text="Sign up" link="/signup"/>
                </nav>
            </section>
            <h1>Login</h1>
            <form  className="container border" onSubmit={submitLoginForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={sendLoginForm}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" name="pass" onChange={sendLoginForm}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h1>{message}</h1>
            </form>
        </div>
        
    )
}
