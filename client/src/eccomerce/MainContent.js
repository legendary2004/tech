import Nav from "./Nav";
import Offvanvas from "./Offvanvas";
import PhoneCard from "./PhoneCard";
import PhoneCardA from "./PhoneCardA";
import PhoneCardZ from "./PhoneCardZ";
import TvCard from "./TvCard";
import TvTab from "./tvTab";
import ComputingCard from "./ComputingCard";
import contact from "../samsungImages/contact_hero.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



export default function() {
    const location = useLocation();
    const navigate = useNavigate();
    let [count, setCount] = React.useState(0);
    let [cart, setCart] = React.useReducer(addToCart, []);
    let [price, setPrice] = React.useState(0);
    let [displayCart, setDisplayCart] = React.useState([]);
    
    function saveInfo(path) {
        navigate(path, location.state && {state: {name: location.state.name, isAdmin: location.state.isAdmin, isLoggedIn: location.state.isLoggedIn}})
    }

    React.useEffect(function() {
        let totalPrice = 0
        ;
            for (let j = 0; j < cart.length; j++) {
                
                totalPrice += Number(cart[j].price);

            }
        setPrice(totalPrice);
        setDisplayCart(cart.map(function(item, index) {
            return (
                <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button className="btn btn-primary" onClick={() => setCart({do: "remove", id: item.id})}>Remove from cart</button>
                    <hr/>
                </div>
            )
        }))
    }, [cart])

    function addToCart(value, action) {
        let index = value.findIndex(value => value.id == action.id)
        const name = value.filter(e => e.name === action.name)
        if (action.do == 'add' && location.state) {
            if (name.length > 0) {
                

                value[index].quantity += 1;
                value[index].price = action.price
                value[index].price *= value[index].quantity
            }
            else {
                value.push({
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    quantity: 1
                })
                setCount(prev => prev + 1)
            }
        }   
        if (action.do == 'remove') {
            value.splice(index, 1)
        }
        return [...value]
    
        
    }

    function insertOrder() {
        axios.post("http://localhost:5000/orders", {
            name: location.state.name,
            price: price,
        })
    }

    return (
        <main>
            <section className="navbar">
                <nav className="bg-body-tertiary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 font">Samsung</span>
                    </div>
                </nav>
                <nav className="nav flex-column">
                    <Nav text="Mobile" click={() => saveInfo("#phones")} link="#phones"/>
                    <Nav text="TV" click={() => saveInfo("#TV")} link="#TV"/>
                    <Nav text="Computing" click={() => saveInfo("#Computing")}  link="#Computing"/>
                    <Nav text="Contact" click={() => saveInfo("#Contact")}  link="#Contact"/>
                    {
                        !location.state &&
                        <>
                            <Nav text="Login" link="/login"/>
                            <Nav text="Sign up" link="/signup"/>
                        </>
                    }
                    {
                        location.state && 
                        <>
                            <Nav text="Log out" link="/login"/>
                            {
                                location.state.isAdmin && 
                                <>
                                    <Nav text="Add a product" link="/addproduct"/>
                                    <Nav text="Edit a product" link="/editProducts"/>
                                    <Nav text="Orders" link="/orders" />
                                </>
                            }
                        </>
                        
                    }
                </nav>
            </section>
            <section className="position-right">
            <ul className="nav justify-content-end">
                    <Offvanvas count={count} cart={displayCart} price={price} click={insertOrder}/>
                </ul>
            </section>
            <div className="container" id="phones">
                <h1>Mobile phones</h1>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Galaxy S</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Galaxy Z</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Galaxy A</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div>
                            <PhoneCard click={setCart}/>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div>
                            <PhoneCardZ click={setCart}/>
                        </div> 
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                        <div>
                            <PhoneCardA click={setCart}/>
                        </div>
                    </div>            
                </div>
            </div>
            <div className="container" id="TV">
                <h1>TV</h1>
                <TvTab />
                <TvCard click={setCart}/>
            </div>
            <div className="container" id="Computing">
                <h1>Computing</h1>
                <div>
                    <ComputingCard click={setCart}/>
                </div> 
            </div>
            <br/>
            <div className="container" id="Contact">
                <div className="card" style={{position: "relative", border: "none"}}>
                    <img src={contact} className="card-img-top" alt="..." />
                    <div className="card-body" style={{position: "absolute", left: "42%", top: "40%"}}>
                        <h2 className="card-title">Contact us</h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                        <div className="col-4" style={{marginTop: "30px"}}>
                            <div className="mb-4">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter model number" />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Enter message"></textarea>
                            </div>
                        </div>
                        <div className="col-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13467059.960510526!2d-106.82780524521081!3d34.506523728491196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1b85bdf6a91%3A0x446833941fda918!2sSamsung%20Experience%20Store!5e0!3m2!1sen!2s!4v1666376420272!5m2!1sen!2s" width="900" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <hr/>
                <div className="card-footer">
                    <div className="row">
                        <div className="col">
                            <h5>Copyright© 1995-2022 SAMSUNG All Rights Reserved.</h5>
                        </div>
                        <div className="col top">
                            <a href="https://www.instagram.com/samsungmobileusa/" className="icon icon-red " target="_blank"><FaInstagram /></a>
                            <a href="https://www.facebook.com/SamsungUS" className="icon icon-blue " target="_blank"><FaFacebook /></a>
                            <a href="https://twitter.com/SamsungUS" className="icon icon-blue " target="_blank"><FaTwitter /></a>
                            <a href="https://www.youtube.com/samsungus" className="icon icon-red " target="_blank"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
            {!location.state && 
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Failed to add in cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You must be logged in in order to make purchases
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            }
            
        </main>
    )
}