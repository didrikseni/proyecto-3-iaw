import React from 'react';
import '../../css/App.css';
import '../../css/navbar.css';
import Navbar from '../navbar/navbar';
import PageContent from '../page_content/PageContent';
import Footer from '../footer/Footer';
import Login from '../auth/Login';
import Register from '../auth/Register';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      user: props.user,
      redirect: 'HOME_PAGE',
    };
    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
  }

  handleSuccesfulAuth(data) {
    //this.props.handleLogin(data);
    //this.props.history.push('/dashboard');
    this.setState({
      isLoggedIn: true,
      user: data,
    });
  }

  render() {
    return this.state.redirect === 'HOME_PAGE' ? (
      <>
        <Navbar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <PageContent isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <Footer />
      </>
    ) : this.state.redirect === 'LOGIN' ? (
      <>
        <Login handleSuccesfulAuth={this.handleSuccesfulAuth} />
      </>
    ) : (
      <>
        <Register handleSuccesfulAuth={this.handleSuccesfulAuth} />
      </>
    );
  }
}

export default Home;
