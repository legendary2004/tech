import React from "react"
import axios from "axios"

export default function(prop) {

    const [tv, setTv] = React.useState()

    React.useEffect(function() {
        axios.post("http://localhost:5000/editProducts")
        .then(res => setTv(res.data.products.map(function(item, index) {
            if (item.category === 'TV') {
                return (
                    <div className="tab-pane fade" id={`pills${item.id}`} role="tabpanel"  tabIndex="0" key={item.id}>
                        <div className="card" style={{textAlign: "center", position: "relative", border: "none"}}>
                            <h3 className="card-title" style={{position: "absolute", top: "2%", left: "15%"}}>Price: {item.price}$</h3>
                            <img src={require(`../samsungImages/${item.image}`)} className="card-img-top" alt="..." />
                            <div className="card-body" style={{position: "absolute", top: "83%", left: "15%"}}>
                                <p className="card-text">{item.details}</p>
                            </div>
                            <button type="button" className="btn btn-primary btn-sm" onClick={() => prop.click({do: "add", id: item.id, name: item.name, price: item.price})} data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
                        </div>
                    </div>
                )
            }
        })))
    })

    return (
        <div className="tab-content" id="pills-tabContent">
            {tv}            
        </div>
    )
}