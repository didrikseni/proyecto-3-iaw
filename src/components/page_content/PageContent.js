import React from 'react';
import Articles from './Articles';
import SearchBar from '../search_bar/SearchBar';

class PageContent extends React.Component {
  componentDidMount() {
    let token = sessionStorage.getItem('access_token');
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({
      isLoggedIn: !!token,
      user: user
    });
  }

  render() {
    return (
      <div className="container page-content my-5">
          <div className="my-5">
            <SearchBar/>
            <Articles />
          </div>
      </div>
    );
  }
}

export default PageContent;
