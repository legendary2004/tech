import Nav from "./Nav";
import "./style.css";
import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function() {
    const location = useLocation();
    const navigate = useNavigate();
    let [products, setProducts] = React.useState({
        name: location.state ? location.state.name : "", 
        details: location.state ? location.state.details : "", 
        price: location.state? location.state.price: 0, 
        category: location.state? location.state.category: "", 
        formFile: location.state? location.state.image : ""})
    let [productStatus, setProductStatus] = React.useState("")
    

    function handleChange(event) {
        const value = event.target.type === 'file' ? event.target.files[0].name : event.target.value;
        setProducts({
            ...products,
            [event.target.name]: value,
        })
        
    }

    function saveInfo(path) {
        navigate(path, {state: {name: 'admin', isAdmin: true, isLoggedIn: true}})
    }

    function sendForm(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/products", {
            name: products.name,
            details: products.details,
            price: products.price,
            category: products.category,
            formFile: products.formFile,
            affect: location.state,
            id: location.state ? location.state.id : ""
        })
        .then(res => setProductStatus(res.data.message))
    }

    React.useEffect(function() {
        console.log(location)
    }, [location])

    return (
        <div>
            <section className="navbar">
                <nav className="nav flex-column">
                    <Nav text="Home" link="/" click={() => saveInfo("/")}/>
                    <Nav text="Login" link="/login"/>
                    <Nav text="Sign up" link="/signup"/>
                </nav>
            </section>
            <h1>{location.state ? "Edit" : "Add"} product</h1>
            <form className="container border" onSubmit={sendForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Products Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required defaultValue={location.state ? location.state.name : ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">Products details</label>
                    <textarea className="form-control" id="details" rows="3" name="details" onChange={handleChange} required defaultValue={location.state? location.state.details : ""}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Products Price($)</label>
                    <input type="number" className="form-control" id="price" name="price" onChange={handleChange} required defaultValue={location.state ? location.state.price : ""}/>
                </div>
                <div className="mb-3">
                <label htmlFor="category" className="form-label">Set category of the product</label>
                    <select className="form-select" aria-label="Default select example" name="category" onChange={handleChange} required defaultValue={location.state ? location.state.category : ""}> 
                        <option></option>
                        <option value="Mobile A series">Mobile A series</option>
                        <option value="Mobile S series">Mobile S series</option>
                        <option value="Mobile Z series">Mobile Z series</option>
                        <option value="TV">TV</option>
                        <option value="Computing">Computing</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Insert file</label>
                    <input className="form-control" type="file" accept="image/*" id="formFile" onChange={handleChange} required name="formFile"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h1>{productStatus}</h1>
            </form>
        </div>
    )
}