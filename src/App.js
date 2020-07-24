import React from 'react';
import './css/App.css';
import './css/navbar.css';
import Home from './components/home/Home';
import { getData } from './services/GetData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import Article from './components/article/Article';
import Dashboard from './components/dashboard/Dashboard';
import NewArticle from './components/article/NewArticle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
    let token = sessionStorage.getItem('access_token');
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({
      isLoggedIn: !!token,
      user: user,
    });
  }

  checkLoginStatus() {
    if (!sessionStorage.getItem('access_token')) {
      this.setState({ isLoggedIn: false });
    } else {
      getData('isLoggedIn', sessionStorage.getItem('access_token'))
        .then((res) => res.json())
        .then((res) => {
          this.setState({ isLoggedIn: res.logged_in });
        })
        .catch((error) => {
          console.log('check login error', error);
        });
    }
  }

  handleLogin(data) {
    sessionStorage.setItem('user', JSON.stringify(data.user));
    sessionStorage.setItem('access_token', JSON.stringify(data.access_token).slice(1, -1));
    this.setState({
      isLoggedIn: true,
      user: data,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('access_token');
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/dashboard'} render={(props) => <Dashboard {...props} handleLogin={this.handleLogin} />} />
          <Route exact path={'/'} render={(props) => <Home {...props} handleLogin={this.handleLogin} />} />
          <Route exact path={'/tags/:handle'} render={Home}></Route>
          <Route path="/article/:handle" component={Article} />
          {this.state.isLoggedIn && (
            <>
              <Route exact path={'/profile'} render={(props) => <Profile {...props} />} />
              <Route exact path={'/new-article'} render={(props) => <NewArticle {...props} />} />
            </>
          )}
          {!this.state.isLoggedIn && (
            <>
              <Route exact path="/register" render={(props) => <Register {...props} handleLogin={this.handleLogin} />} />
              <Route exact path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
            </>
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//<Route exact path={'/article'} render={(props) => <Article {...props} />} />
