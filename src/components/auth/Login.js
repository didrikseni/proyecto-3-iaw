import React from 'react';
import '../../css/Login.css';
import '../../services/PostData';
import { Redirect, BrowserRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.state.email && this.state.password) {
            this.postLogin()
                .then((res) => res.json())
                .then((resJSON) => {
                    if (resJSON.userData) {
                        sessionStorage.setItem('userData', resJSON);
                        this.setState({ redirect: true });
                    } else {
                        console.log('Error loggin in');
                    }
                });
        }
    }

    postLogin() {
        try {
            return fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state),
            });
        } catch (error) {
            console.error(error);
        }
    }

    onChange(elem) {
        this.setState({
            [elem.target.name]: elem.target.value,
        });
    }

    render() {
        if (this.state.redirect) {
            return (
                <BrowserRouter>
                    <Redirect to="/index" />
                </BrowserRouter>
            );
        }

        return (
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
        );
    }
}

export default Login;
