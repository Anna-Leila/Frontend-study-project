import './App.css';
import React from "react";
import Products from "./components/Products";
import {BrowserRouter} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

function App() {

    return <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <HashLink className="nav-link active" to="Products#CPU">CPU</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link active" to="Products#GPU">GPU</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link active" to="Products#RAM">RAM</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link active" to="Products#Hard drive">Hard Drive</HashLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Products></Products>
        </BrowserRouter>
    </>
}


export default App;
