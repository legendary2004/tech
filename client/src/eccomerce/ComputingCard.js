import React from "react"
import axios from "axios"

export default function(prop) {

  const [computing, setComputing] = React.useState([])

  React.useEffect(function() {
    axios.post("http://localhost:5000/editProducts")
    .then(res => setComputing(res.data.products.map(function(item) {
      if (item.category === 'Computing') {
        return (
          <div className="col" key={item.id}>
            <div className="card">
              <img src={require(`../samsungImages/${item.image}`)} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{item.name} ({item.price}$)</h3>
                <p className="card-text">{item.details}</p>
                <button type="button" className="btn btn-primary" onClick={() => prop.click({do: "add", id: item.id, name: item.name, price: item.price
              })} data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
              </div>
            </div>
          </div>
        )
      }
    })))
  }, [])

  return(
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {computing}
      </div>
  )
}