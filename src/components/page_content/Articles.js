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
  }

  render() {
    return this.state.isLoading ? (
      'Cargando artículos...'
    ) : (
      <div className="card">
        <div className="card-header mb-2">
          <h4>Artículos</h4>
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
                  <p className="custom-text">Autor: {article.author}</p>
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

  getArticlesFromApiAsync = async () => {
    try {
      return await fetch('https://portal-uns.herokuapp.com/api/api_articles', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODE1MTE4YmVlZGQ4MmI2ZDAxZjViZmJjNDM2ZWI4MzhkNmE1M2ZiYjdiMzgyZWViMTBlNWQxMTE2MGY0MGYyZWFmOTU1M2ZkOTVjYTc1YzkiLCJpYXQiOjE1OTQ0ODQ4NzgsIm5iZiI6MTU5NDQ4NDg3OCwiZXhwIjoxNjI2MDIwODc4LCJzdWIiOiIzMSIsInNjb3BlcyI6W119.ktXuGRgCsS90WaqbB47Ysm7plPqbpCpbUiF4iUG6wLD0Pm8g9KjFFuP88GA4oMaUoy6wuTxwK4pSaYs5x7vSKp44YxCd-fwmNlr7IgEwYlWuvoP2v-AlkXnU6nYha8NKtOKEmdu9KwV78Nwq1Wt9FVi03pWFXCGN34kMUCYoJm0DnyPdHgbsmqNeI0g-WUhb2-xOGzu9fuWjcIrDLo0n-cfRzV_zoG6yjrrHLdqGTZqGBiIqjf4MuoFoenPEiu5dZ0EDTekC2KnmTq17UgSJXVa5EShiv6aE5_9LQN2IIHQPki--SAKuBMAgckrpvvbgW_yvVrs9ForBVT2QjPqhwlWsOMcflydJKrTrzH0QuG87_1LVOyu8lalrukaoLJ8WzHHejHSizY7dSXWWNjw0zlFqVLjkE4_KCAmNKy3flfIKPH7gvsryROuDwsZsei4GCP8Ga_TLfKU-9R0RXU8d6QWPJQH0jFrVFGH_ZTpL05tog8z0NmgedS3Tp3lk0gXcK5zXW4EpjildYb8DP5vvDAUyu4JEMwqaIwHkvlyM-5a3vRjKqcnjJhPT8zowLdoa6A-x_Apr5wA3_zTorFJBjvM0DNF00Mf5yMuWoV-R3us2Wgt_qYCJBhfIV4bAr7FMP455bb9Pb4q3rTxBspq5AkC7OsBKZKMk94enkgrcSx4',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default Articles;
