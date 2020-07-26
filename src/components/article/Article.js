import * as React from 'react';
import { getData } from '../../services/GetData';
import { Editor } from '@tinymce/tinymce-react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/navbar';
import '../../css/App.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.getArticleFromAPI = this.getArticleFromAPI.bind(this);
  }

  componentDidMount() {
    const { handle } = this.props.match.params;
    let token = sessionStorage.getItem('access_token');
    this.getArticleFromAPI(handle, token);
  }

  getArticleFromAPI(article, token) {
    getData('api_articles/' + article, token)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({ article: resJSON });
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="page-content mx-5">
          <div id="title" className="custom-text">
            <h2>{this.state ? this.state.article.title : 'Loading..'}</h2>
          </div>
          <div className="custom-text flex-grow-1">
            <div className="flex-grow-1">
              <Editor
                value={this.state ? this.state.article.content : ''}
                apiKey="3yn19ck0mgv6qus3qkej8vrfp9x3q45am4ikvprcke9nzs7q"
                init={{
                  selector: 'textarea',
                  toolbar: false,
                  menubar: false,
                  tinycomments_mode: 'embedded',
                  tinycomments_author: 'Author name',
                  readonly: 1,
                  plugins: ['autoresize', 'preview', 'autolink'],
                  branding: false,
                }}
              />
            </div>
            <br /> <br />
          </div>
          <div className="row custom-text">
            <div className="ml-auto">
              {this.state ? (
                <h4>
                  Autor:{' '}
                  <Link to={'/profile/' + this.state.article.user_id} className="custom-text card-link">
                    {this.state.article.author}
                  </Link>
                </h4>
              ) : (
                <h4> Loading.. </h4>
              )}
            </div>
          </div>
          <div className="row custom-text mb-5">
            <ul className="list-unstyled">
              {this.state ? (
                this.state.article.tags.map((tag) => (
                  <Link to={'/tags/' + tag.id} className="card-link custom-text m-2">
                    {tag.name}
                  </Link>
                ))
              ) : (
                <li className="custom-text">Loading tags...</li>
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Article;
