import * as React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    let token = sessionStorage.getItem('access_token');
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({
      isLoggedIn: !!token,
      user: user,
    });
  }

  render() {
    const cssStyle = {
      'border-radius': '50%',
    };
    return (
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
            <i className="fas fa-user fa-5x col-2 m-5" />
          )}

          <p className="text-center col-3 custom-text m-5">{this.state.user.name}</p>
        </div>
        <p className="custom-text text-center">{this.state.user.email}</p>
        <div className="text-center p-5">
          <button className="card-link custom-button">Modificar perfil</button>
        </div>
      </div>
    );
  }
}

export default Profile;
