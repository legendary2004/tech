import { FaShoppingCart } from "react-icons/fa";

export default function(prop) {
    return (
        <div className="position-right">
        <button type="button" className="btn btn-primary position-relative noBackground nav-item">
            <a className="nav-link font" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <FaShoppingCart />
            </a>
            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                {prop.count}
            </span>
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    {prop.cart.length == 0 && <h6>No items added in your cart</h6>}
                    {prop.cart.length != 0 && prop.cart}
                    <h6>Total price: {prop.price}$</h6>
                    <button type="button" className="btn btn-secondary">Buy</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}