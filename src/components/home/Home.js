import React from 'react';
import '../../css/App.css';
import '../../css/navbar.css';
import Navbar from '../navbar/navbar';
import PageContent from '../page_content/PageContent';
import Footer from '../footer/Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar props={this.props}/>
        <PageContent props={this.props}/>
        <Footer props={this.props}/>
      </>
    );
  }
}

export default Home;
