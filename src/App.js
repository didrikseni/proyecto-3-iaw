import React from 'react';
import './css/App.css';
import './css/navbar.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data,
    });
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
            ></Route>
            <Route
              exact
              path={'/dashboard'}
              render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />}
            ></Route>
            <Route
              exact
              path={'/profile'}
              render={(props) => <Profile {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />}
            ></Route>
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
