import React from 'react';

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
          <h5 className="custom-text-navbar">{props.user.user.name}</h5>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <h5 className="custom-text-navbar">Salir</h5>
        </div>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav nav-pills nav-justified">
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <h5 className="custom-text-navbar">Ingresar</h5>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <h5 className="custom-text-navbar">Registrarse</h5>
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
          <NavbarList isLoggedIn={this.props.isLoggedIn} username={this.props.user} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
