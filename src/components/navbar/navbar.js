import React from 'react';
import '../../css/navbar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import { postData } from '../../services/PostData';

function NavbarList(props) {
  return props.isLoggedIn ? (
    <ul className="navbar-nav nav-pills nav-justified">
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <Link to={'/new-article'} className="custom-text-navbar button-link card-link custom-nav-item">
            <i className="fas fa-cloud-upload-alt fa-sm custom-text-navbar"> Artículo</i>
          </Link>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <div className="dropdown">
            <button className="dropdown-toggle custom-text-navbar button-link" data-toggle="dropdown">
              {props.user.name}
            </button>
            <div className="dropdown-menu dropdown-menu-sm-right">
              <button className="dropdown-item button-link">Editar perfil</button>
              <div className="dropdown-divider" />
              <button className="dropdown-item button-link" onClick={props.logout}>
                Salir
              </button>
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
            <Link to="/login" className="custom-text-navbar button-link card-link">
              Ingresar
            </Link>
          </button>
        </div>
      </li>
      <li className="mx-2 nav-item">
        <div className="nabvar-item nav-pills nabvar">
          <button className="custom-text-navbar button-link" onClick={props.redirectRegister}>
            <Link to="/register" className="custom-text-navbar button-link card-link">
              Registrarse
            </Link>
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
      isLoggedIn: false,
      user: {},
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let token = sessionStorage.getItem('access_token');
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({
      isLoggedIn: !!token,
      user: user,
    });
  }

  logout() {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
    let token = sessionStorage.getItem('access_token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('access_token');
    this.logoutFromAPI(token);
    window.location.reload(false);
  }

  logoutFromAPI(token) {
    postData('logout', '', token)
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON);
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm nav position-absolute fixed-top">
        <div className="nabvar-item nav-pills nabvar">
          <button className="custom-text-navbar button-link">
            {this.state.isLoggedIn && (
              <Link to={'/dashboard'} className="custom-text-navbar button-link card-link">
                Portal UNS
              </Link>
            )}
            {!this.state.isLoggedIn && (
              <Link to={'/'} className="custom-text-navbar button-link card-link">
                Portal UNS
              </Link>
            )}
          </button>
        </div>
        <div className="ml-auto">
          <NavbarList isLoggedIn={this.state.isLoggedIn} user={this.state.user} logout={this.logout} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
