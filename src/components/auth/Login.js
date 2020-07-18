import React from 'react';
import '../../css/Login.css';
import '../../services/PostData';
import { postData } from '../../services/PostData';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.email && this.state.password) {
      postData('login', this.state)
        .then((res) => res.json())
        .then((resJSON) => {
          if (resJSON.userData) {
            this.props.handleSuccesfulAuth(resJSON.userData);
          } else {
            console.log('Error loggin in');
          }
        });
    }
  }

  onChange(elem) {
    this.setState({
      [elem.target.name]: elem.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="row fixed-top mt-4">
          <div className="ml-auto mr-5">
            <button className="button-link mx-2 custom-text" onClick={this.props.redirectHome}>
              Volver
            </button>
            <button className="button-link mx-2 custom-text" onClick={this.props.redirectRegister}>
              Registrar
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group">
            <div className="row my-2">
              <label>Email</label>
              <input type="text" className="form-control my-2" name="email" placeholder="Email" onChange={this.onChange} />
            </div>
            <div className="row my-2">
              <label>Contraseña</label>
              <input type="password" className="form-control my-2" name="password" placeholder="Contraseña" onChange={this.onChange} />
            </div>
            <input type="submit" value="Login" className="custom-button mt-2" onClick={this.login} />
          </div>
        </div>
      </>
    );
  }
}

export default Login;
