import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () =>{
    return(
        <nav className="text-sm text-gray-600 my-4">
            <ol className="list-reset flex ml-4">
                <li>
                    <Link to="/" className="text-gray-400 hover:underline">Home</Link>
                </li>
                <li><span className="mx-2">{'>'}</span></li>
                <li>
                    <Link to="/catalog" className="text-gray-400 hover:underline">Catalog</Link>
                </li>
                <li><span className="mx-2">{'>'}</span></li>
                <li>
                    <Link to="/products" className="text-black hover:underline">Smart Phones</Link>
                </li>
                
            </ol>
        </nav>
    )
}

export default Breadcrumbs;