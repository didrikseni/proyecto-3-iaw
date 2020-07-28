import React from 'react';
import { getData } from '../../services/GetData';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      isLoading: true,
      acces_token: sessionStorage.getItem('access_token'),
    };
    this.fetchArticlesFromAPI = this.fetchArticlesFromAPI.bind(this);
  }

  componentDidMount() {
    this.fetchArticlesFromAPI();
  }

  fetchArticlesFromAPI(query = '') {
    let cond = query !== null && this.state.articles.current_page && parseInt(query.slice(7)) !== this.state.articles.current_page;
    if (cond | this.state.isLoading) {
      getData('api_articles' + query, this.state.acces_token)
        .then((response) => response.json())
        .then((articlesJson) => {
          this.setState({ articles: articlesJson, isLoading: false });
        });
    }
    window.scrollTo(0, 0)
  }

  render() {
    return this.state.isLoading ? (
      'Cargando artículos...'
    ) : (
      <div className="card">
        <div className="card-header mb-2">
          <Link to="/" className="card-link">
            <h4>Artículos</h4>
          </Link>
        </div>
        <ul className="list-unstyled">
          {this.state.articles.data.map((article) => (
            <li key={article.id} className="pt-2 mx-4">
              <div className="row">
                <div className="col-8">
                  <Link to={'/article/' + article.id} className="card-link custom-text">
                    <h4>{article.title}</h4>
                  </Link>
                </div>
                <div className="col-3 ml-auto">
                  <p className="custom-text">Score: {article.score}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <p className="custom-text">{article.description}</p>
                </div>
                <div className="col-4 ml-auto">
                  <p className="custom-text">
                    Autor:
                    <Link to={'/profile/' + article.user_id} className="card-link custom-text">
                      {article.author}
                    </Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </li>
          ))}
        </ul>
        <div className="card-footer">
          <ul className="list-unstyled">
            <div className="row">
              <li className="col-auto ml-auto my-2 mx-3">
                <button
                  className="card-link button-link card"
                  onClick={() => {
                    this.fetchArticlesFromAPI(this.state.articles.first_page_url);
                  }}
                >
                  Primera
                </button>
              </li>
              <li className="col-auto my-2 mx-3">
                <button
                  className="card-link button-link card"
                  onClick={() => {
                    this.fetchArticlesFromAPI(this.state.articles.prev_page_url);
                  }}
                >
                  Anterior
                </button>
              </li>
              <li className="col-auto my-2 mx-3">Actual: {this.state.articles.current_page}</li>
              <li className="col-auto my-2 mx-3">
                <button
                  className="card-link button-link card"
                  onClick={() => {
                    this.fetchArticlesFromAPI(this.state.articles.next_page_url);
                  }}
                >
                  Siguiente
                </button>
              </li>
              <li className="col-auto my-2 mx-3">
                <button
                  className="card-link button-link card"
                  onClick={() => {
                    this.fetchArticlesFromAPI(this.state.articles.last_page_url);
                  }}
                >
                  Ultima
                </button>
              </li>
              <li className="col-auto my-2 mx-3">Total de páginas: {this.state.articles.last_page}</li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Articles;
