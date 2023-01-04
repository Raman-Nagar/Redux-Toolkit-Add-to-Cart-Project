import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const totalItem = useSelector(state => state.cart)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/cart">Cart</Link></li>
                            <li className="nav-item"><span className="nav-link active text-dark"><i class="fa-sharp fa-solid fa-cart-plus"></i>({totalItem.length})</span></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;