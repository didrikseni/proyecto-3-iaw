import React from 'react';
import './css/navbar.css';

function Item(props) {
    return (
        <a className="nabvar-item nav-pills nabvar custom-button"> { props.name } </a>
    );
}

function NavbarList(props) {
    if (props.isLoggedIn)
        return (
        <ul className="navbar-nav nav-pills nav-justified">
            <li className="nav-item">
                <div className="nabvar-item nav-pills nabvar">
                    <h5>Articulo</h5>
                </div>
            </li>
            <li className="mx-2 nav-item">
                <div className="nabvar-item nav-pills nabvar">
                    <h5>{props.name}</h5>
                </div>
            </li>
            <li className="mx-2 nav-item">
                <div className="nabvar-item nav-pills nabvar">
                    <h5>Salir</h5>
                </div>
            </li>
        </ul>
    );
    else return (
        <ul className="navbar-nav nav-pills nav-justified">
            <li className="mx-2 nav-item">
                <div className="nabvar-item nav-pills nabvar">
                    <h5>Ingresar</h5>
                </div>
            </li>
            <li className="mx-2 nav-item">
                <div className="nabvar-item nav-pills nabvar">
                    <h5>Registrarse</h5>
                </div>
            </li>
        </ul>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm nav position-absolute fixed-top">
            <div className="nabvar-item nav-pills nabvar">
                <h5>Portal UNS</h5>
            </div>
            <div className="ml-auto">
                <NavbarList isLoggedIn={true}/>
            </div>
        </nav>
    );
}

export default Navbar;