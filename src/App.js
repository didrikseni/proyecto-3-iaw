import React from 'react';
import './css/App.css';
import './css/navbar.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import {getData} from './services/GetData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (!sessionStorage.getItem('access_token')) {
      this.setState({isLoggedIn: false})
    } else {
      getData('isLoggedIn', sessionStorage.getItem('access_token'))
          .then((res) => res.json())
          .then((res) => { this.setState({isLoggedIn: res.logged_in})})
          .catch((error) => {
            console.log('check login error', error);
          });
    }
  }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data,
    });
    sessionStorage.setItem('access_token',  JSON.stringify(data.access_token).slice(1, -1));
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={'/'}
              render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleLogin={this.handleLogin} />}
            />
            <Route
              exact
              path={'/dashboard'}
              render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleLogin={this.handleLogin} />}
            />
            <Route exact path={'/profile'} render={(props) => <Profile {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );

    // if (this.state.redirect) {
    //     return <Login />;
    // } else {
    //     return (
    //         <div>
    //             <Navbar isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
    //             <PageContent isLoggedIn={true} username={'Ian Didriksen'} email={'iandidri@gmail.com'} />
    //             <Footer />
    //         </div>
    //     );
    // }
  }
}

export default App;
