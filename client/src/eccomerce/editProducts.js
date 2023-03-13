import "./style.css"
import Nav from "./Nav"
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function editProduct(state, action) {
    let value = {};
    axios.post("http://localhost:5000/deleteProduct", {
            id: +action.id,
            button: action.type
        })
    .then(res => {
        if (action.type == 'Remove') {
            console.log("Hi")
        }
        else {
            value.name = res.data.products[0].name;
            value.details = res.data.products[0].details;
            value.price = res.data.products[0].price;
            value.category = res.data.products[0].category;
            value.image = res.data.products[0].image;
            value.id = res.data.products[0].id;
        }
    }
        
    )
    return value
}


export default function() {
    const [products, setProducts] = React.useState();
    const [oneProduct, setOneProduct] = React.useReducer(editProduct, {name: "", details: "", price: 0, category: "", image: "", id: 0})

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/addproduct'
        navigate(path, {state: {
            name: oneProduct.name, 
            details: oneProduct.details, 
            price: oneProduct.price, 
            category: oneProduct.category, 
            image: oneProduct.image, 
            id: oneProduct.id}})
    }

    function saveInfo(path) {
        navigate(path, {state: {name: 'admin', isAdmin: true, isLoggedIn: true}})
    }

    React.useEffect(function() {
        axios.post("http://localhost:5000/editProducts")
        .then(res => setProducts(res.data.products.map(function(item, index) {
            return (
                <tr key={index}>
                    <th scope="col">{item.id}</th>
                    <th scope="col" className="font-weight">{item.name}</th>
                    <th scope="col" className="font-weight">{item.details}</th>
                    <th scope="col" className="font-weight">{item.category}</th>
                    <th scope="col" className="font-weight">{item.price}</th>
                    <th scope="col" className="font-weight"><img src={require(`../samsungImages/${item.image}`)} width="100px" height="75px"/></th>
                    <th scope="col">
                        <button className="btn btn-primary" onMouseOver={() => {setOneProduct({type: "Edit", id: item.id});}} onClick={routeChange}>Edit</button>
                        <button className="btn btn-danger" onClick={() => setOneProduct({type: "Remove", id: item.id})} data-bs-toggle="modal" data-bs-target="#exampleModal">Remove</button>
                    </th>
                </tr>
            )
        })))
    }, [products])

    return (
        <div>
            <section className="navbar">
                <nav className="nav flex-column">
                    <Nav text="Home" link="/" click={() => saveInfo("/")}/>
                    <Nav text="Login" link="/login"/>
                    <Nav text="Sign up" link="/signup"/>
                </nav>
            </section>
            <table className="table container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Database updated</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        
    )
}