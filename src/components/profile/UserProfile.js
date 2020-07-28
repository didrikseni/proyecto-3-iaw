import * as React from 'react';
import {getData} from "../../services/GetData";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    const { handle } = this.props.match.params;
    this.state = {
      userid: handle,
      user: {},
    };
  }

  componentDidMount() {
    let token = sessionStorage.getItem('access_token');
    if (token) this.setState({isLoggedIn: true})
    this.getUserFromAPI(this.state.userid, token);
  }

  getUserFromAPI(user, token) {
    console.log(user, token)
    getData('api_users/' + user, token)
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON)
        this.setState({user: resJSON.user});
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  render() {
    const cssStyle = {
      'border-radius': '50%',
    };
    return (
      <>
        <Navbar/>
        <div className="page-content">
          <div className="row justify-content-center mx-5">
            <div className="col-5 my-5">
              <div className="card">
                <div className="card-header">
                  <h4>Perfil</h4>
                </div>
                <div className="row justify-content-center pt-4">
                  {this.state.user.avatar ? (
                    <img
                      alt="avatar"
                      src={'data:image/jpg;base64, ' + this.state.user.avatar}
                      style={cssStyle}
                      className="centered-and-cropped col-auto ml-5 mr-3 mt-3 mb-2"
                      width="100"
                      height="100"
                    />
                  ) : (
                    <i className="fas fa-user fa-5x col-2 m-5"/>
                  )}
                  <p className="text-center col-3 custom-text m-5">{this.state.user.name}</p>
                </div>
                <p className="custom-text text-center">{this.state.user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default UserProfile;
