import React from 'react'

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getArticlesFromApiAsync()
      .then((response) => response.json())
      .then((articlesJson) => this.setState({ articles: articlesJson, isLoading: false }))
  }

  render() {
    if (this.state.isLoading) return 'Cargando artículos...'
    else
      return (
        <div className="col-sm-8">
          <div class="card">
            <div className="card-header mb-2">
              <h4>Artículos</h4>
            </div>
            <ul className="list-unstyled">
              {this.state.articles.map((article) => (
                <li key={article.id} className="pt-2 mx-4">
                  <div className="row">
                    <div className="col-8">
                      <h4>{article.title}</h4>
                    </div>
                    <div className="col-3 ml-auto">
                      <p className="custom-text">Score: 0</p>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
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
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default Articles
