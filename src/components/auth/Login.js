import React from 'react'
import '../../css/Login.css'
import '../../services/PostData'
import PostData from '../../services/PostData'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm_passowrd: '',
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  login() {
    PostData('login', this.state).then((result) => {
      let responseJSON = result
      console.log(responseJSON)
    })
  }

  onChange(elem) {
    this.setState({
      [elem.target.name]: elem.target.value,
    })
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div class="form-group m-2">
          <label for="">Usuario</label>
          <input type="text" class="form-control my-2" name="username" id="" placeholder="Usuario" onChange={this.onChange} />
          <label for="">Contraseña</label>
          <input type="password" class="form-control my-2" name="password" id="" placeholder="Contraseña" onChange={this.onChange} />
          <label for="">Repetir Contraseña</label>
          <input
            type="password"
            class="form-control my-2"
            name="confirm_passowrd"
            id=""
            placeholder="Confirmar contraseña"
            onChange={this.onChange}
          />
          <input type="submit" value="Login" className="custom-button my-2" onClick={this.login} />
        </div>
      </div>
    )
  }
}

export default Login
