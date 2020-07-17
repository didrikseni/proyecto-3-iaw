import React from 'react';
import Articles from './Articles';
import SearchBar from '../search_bar/SearchBar';

function Profile(props) {
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-header">
          <h4>Perfil</h4>
        </div>
        <div className="row justify-content-center pt-4">
          <i className="fas fa-user fa-5x col-2 m-5"></i>
          <p className="text-center col-3 custom-text m-5">{props.name}</p>
        </div>
        <p className="custom-text text-center">{props.email}</p>
        <div className="text-center p-5">
          <button className="card-link custom-button">Modificar perfil</button>
        </div>
      </div>
    </div>
  );
}

class PageContent extends React.Component {
  render() {
    return (
      <div className="container page-content my-5">
        {this.props.isLoggedIn ? (
          <div className="row mb-5">
            <Profile username={this.props.username} email={this.props.email} />
            <div className="col-sm-8">
              <Articles redirectArticle={this.props.redirectArticle} />
            </div>
          </div>
        ) : (
          <div className="my-5">
            <SearchBar />
            <Articles redirectArticle={this.props.redirectArticle} />
          </div>
        )}
      </div>
    );
  }
}

export default PageContent;
