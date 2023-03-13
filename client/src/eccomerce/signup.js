import Nav from "./Nav";
import "./style.css";
import React from "react";
import axios from "axios";

export default function() {
    const [register, setRegister] = React.useState({email: "", user: "", pass: "", passRepeat: ""});
    const [message, setMessage] = React.useState("");

    function sendRegisterForm(event) {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
        
    }

    function submitRegisterForm(event) {
        event.preventDefault()
        axios.post("http://localhost:5000/register", {
            email: register.email,
            name: register.user,
            pass: register.pass,
            passRepeat: register.passRepeat
        })
        .then(res => setMessage(res.data.message))
    }
    return (
        <div >
            <section className="navbar">
                <nav className="nav flex-column">
                    <Nav text="Home" link="/" />
                    <Nav text="Login" link="/login"/>
                    <Nav text="Sign up" link="/signup"/>
                </nav>
            </section>
            <h1>Signup</h1>
            <form className="container border" onSubmit={submitRegisterForm}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={sendRegisterForm} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="user" className="form-label">Username</label>
                    <input type="text" className="form-control" id="user" aria-describedby="emailHelp" name="user"  onChange={sendRegisterForm} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" name="pass"  onChange={sendRegisterForm} required/>
                </div>
                <div className="mb-3">
                    <label for="passRepeat" className="form-label">Repeat password</label>
                    <input type="password" className="form-control" id="passRepeat" name="passRepeat"  onChange={sendRegisterForm} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h1>{message}</h1>
            </form>
        </div>
        
    )
}