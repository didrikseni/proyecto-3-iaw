import React from 'react';
import '../../css/App.css';
import '../../css/navbar.css';
import Navbar from '../header/navbar';
import PageContent from '../page-content/PageContent';
import Footer from '../footer/Footer';
import Login from '../auth/Login';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      user: props.user,
    };
  }

  handleSuccesfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <Navbar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
          <PageContent isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Login />
        </>
      );
    }
  }
}

export default Home;
