import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';
import Profile from '../profile/Profile';
import Articles from '../page_content/Articles';
import Home from '../home/Home';

class Dashboard extends React.Component {
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
    return this.state.isLoggedIn ? (
      <>
        <Navbar props={this.props} />
        <div className="row mb-5 mx-5">
          <div className="col-sm-4">
            <Profile user={this.props.user} />
          </div>
          <div className="col-sm-8 text-justify">
            <Articles />
          </div>
        </div>
        <Footer props={this.props} />
      </>
    ) : (
      <>
        <Home />
      </>
    );
  }
}

export default Dashboard;
