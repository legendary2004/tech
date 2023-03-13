import React from "react"
import axios from "axios"

export default function() {
    const [tab, setTab] = React.useState()

    React.useEffect(function() {
        axios.post("http://localhost:5000/editProducts")
        .then(res => setTab(res.data.products.map(function(item, ind) {
            if (item.category === 'TV') {
                return (
                    <li className="nav-item" role="presentation" key={item.id}>
                        <button className="nav-link" id={`pills${item.id}-tab`} data-bs-toggle="pill" data-bs-target={`#pills${item.id}`} type="button" role="tab" aria-controls={`pills${item.id}`} aria-selected="true">{item.name}</button>
                    </li>
                )
            }
        })))
    })
    return(
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {tab}
        </ul>
    )
}