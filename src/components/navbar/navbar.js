import React from 'react';
import '../../css/navbar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function NavbarList(props) {
  return props.isLoggedIn ? (
    <ul className="navbar-nav nav-pills nav-justified">
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <h5 className="custom-text-navbar">Articulo</h5>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <div class="dropdown">
            <button className="dropdown-toggle custom-text-navbar button-link" data-toggle="dropdown">
              {props.user.user.name}
            </button>
            <div class="dropdown-menu dropdown-menu-sm-right">
              <button class="dropdown-item button-link">Editar perfil</button>
              <button class="dropdown-item button-link">Action2</button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item button-link">Salir</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav nav-pills nav-justified">
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <button className="custom-text-navbar button-link" onClick={props.redirectLogin}>
            Ingresar
          </button>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <button className="custom-text-navbar button-link" onClick={props.redirectRegister}>
            Registrarse
          </button>
        </div>
      </li>
    </ul>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      user: props.user,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm nav position-absolute fixed-top">
        <div className="nabvar-item nav-pills nabvar">
          <h5 className="custom-text-navbar">Portal UNS</h5>
        </div>
        <div className="ml-auto">
          <NavbarList
            isLoggedIn={this.props.isLoggedIn}
            user={this.props.user}
            redirectLogin={this.props.redirectLogin}
            redirectRegister={this.props.redirectRegister}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
