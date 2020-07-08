import React from 'react';
import './css/navbar.css';

function Item(props) {
    return (
        <button className="nabvar-item nav-pills nabvar"> { props.name } </button>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm nav position-absolute fixed-top">
            <Item name="Portal UNS"/>
            <Item name="Ingresar"/>
            <Item name="Registrarse"/>
        </nav>
    );
}

export default Navbar;