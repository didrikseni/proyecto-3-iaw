import React from 'react';
import Articles from './Articles';
import SearchBar from '../search_bar/SearchBar';

function Profile(props) {
  const cssStyle = {
    'border-radius': '50%',
  };
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-header">
          <h4>Perfil</h4>
        </div>
        <div className="row justify-content-center pt-4">
          {props.user.user.avatar ? (
            <img
              alt="avatar"
              src={'data:image/jpg;base64, ' + props.user.user.avatar}
              style={cssStyle}
              class="centered-and-cropped col-auto ml-5 mr-3 mt-3 mb-2"
              width="100"
              height="100"
            ></img>
          ) : (
            <i className="fas fa-user fa-5x col-2 m-5"></i>
          )}

          <p className="text-center col-3 custom-text m-5">{props.user.user.name}</p>
        </div>
        <p className="custom-text text-center">{props.user.user.email}</p>
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
            <Profile user={this.props.user} />
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
