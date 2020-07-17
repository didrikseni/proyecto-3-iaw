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
    this.redirectLogin = this.redirectLogin.bind(this);
    this.redirectRegister = this.redirectRegister.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
  }

  handleSuccesfulAuth(data) {
    //this.props.handleLogin(data);
    //this.props.history.push('/dashboard');
    // console.log(data);
    this.setState({
      isLoggedIn: true,
      user: data,
    });
  }

  redirectLogin() {
    if (!this.isLoggedIn && this.state.redirect !== 'LOGIN') {
      this.setState({
        redirect: 'LOGIN',
      });
    }
  }

  redirectRegister() {
    if (!this.isLoggedIn && this.state.redirect !== 'REGISTER') {
      this.setState({
        redirect: 'REGISTER',
      });
    }
  }

  redirectHome() {
    if (!this.isLoggedIn && this.state.redirect !== 'HOME_PAGE') {
      this.setState({
        redirect: 'HOME_PAGE',
      });
    }
  }

  render() {
    return this.state.isLoggedIn || this.state.redirect === 'HOME_PAGE' ? (
      <>
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
          redirectLogin={this.redirectLogin}
          redirectRegister={this.redirectRegister}
        />
        <PageContent isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <Footer />
      </>
    ) : this.state.redirect === 'LOGIN' ? (
      <>
        <Login handleSuccesfulAuth={this.handleSuccesfulAuth} redirectHome={this.redirectHome} redirectRegister={this.redirectRegister} />
      </>
    ) : (
      <>
        <Register handleSuccesfulAuth={this.handleSuccesfulAuth} redirectHome={this.redirectHome} redirectLogin={this.redirectLogin} />
      </>
    );
  }
}

export default Home;
