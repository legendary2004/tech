import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";

export default function() {
    let [orders, setOrders] = React.useState()

    let navigate = useNavigate()
    
    React.useEffect(function() {
        axios.post("http://localhost:5000/orders")
        .then(res => {
            setOrders(res.data.orders.map(function(order) {
                return (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                    </tr>
                )
            }))
        })
    }, [orders])

    function saveInfo(path) {
        navigate(path, {state: {name: 'admin', isAdmin: true, isLoggedIn: true}})
    }
    return (
        <div>
            <section className="navbar">
                <nav className="nav flex-column">
                    <Nav text="Home" link="/" click={() => saveInfo("/")}/>
                    <Nav text="Login" link="/login"/>
                    <Nav text="Sign up" link="/signup"/>
                </nav>
            </section>
        <table className="table table-bordered container">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client name</th>
                    <th scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {orders}
            </tbody>
        </table>
        </div>
        
    )
}