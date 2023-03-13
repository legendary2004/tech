import React from "react"
import axios from "axios"

export default function(prop) {
    const [phoneZ, setPhoneZ] = React.useState()

    React.useEffect(function() {
        axios.post("http://localhost:5000/editProducts")
        .then(res => setPhoneZ(res.data.products.map(function(item, index) {
            if (item.category === 'Mobile Z series') {
                return (
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={require(`../samsungImages/${item.image}`)} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.details}</p>
                                <p className="card-text">Price: {item.price}$</p>
                                <button type="button" className="btn btn-primary" onClick={() => prop.click({do: "add", id: item.id, name: item.name, price: item.price})} data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        })))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {phoneZ}
        </div>
    )
}