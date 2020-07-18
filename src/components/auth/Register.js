import React from 'react';
import '../../css/Login.css';
import '../../services/PostData';
import { postData } from '../../services/PostData';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
  }

  register() {
    if (this.state.email && this.state.password && this.state.password_confirmation) {
      postData('register', this.state)
        .then((res) => res.json())
        .then((resJSON) => {
          if (resJSON.userData) {
            this.props.handleSuccesfulAuth(resJSON.userData);
          } else {
            console.log('Error on registration');
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
            <button className="button-link mx-2 custom-text" onClick={this.props.redirectLogin}>
              Ingresar
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group">
            <div className="row my-2">
              <label>Nombre</label>
              <input type="text" className="form-control my-2" name="name" placeholder="Nombre" onChange={this.onChange} />
            </div>
            <div className="row my-2">
              <label>Email</label>
              <input type="text" className="form-control my-2" name="email" placeholder="Email" onChange={this.onChange} />
            </div>
            <div className="row my-2">
              <label>Contraseña</label>
              <input type="password" className="form-control my-2" name="password" placeholder="Contraseña" onChange={this.onChange} />
            </div>
            <div className="row my-2">
              <label>Repetir Contraseña</label>
              <input
                type="password"
                className="form-control my-2"
                name="password_confirmation"
                placeholder="Confirmar Contraseña"
                onChange={this.onChange}
              />
            </div>
            <input type="submit" value="Register" className="custom-button mt-2" onClick={this.register} />
          </div>
        </div>
      </>
    );
  }
}

export default Register;
