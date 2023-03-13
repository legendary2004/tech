import { Routes, Route,} from "react-router-dom";
import MainContent from "./eccomerce/MainContent";
import Login from "./eccomerce/login";
import Signup from "./eccomerce/signup";
import AddProduct from "./eccomerce/addProduct";
import EditProducts from "./eccomerce/editProducts";
import "./eccomerce/style.css";

export default function() {
    return (
        <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editProducts" element={<EditProducts />} />
        </Routes>
    )
}