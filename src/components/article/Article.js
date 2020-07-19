import * as React from 'react';
import { getData } from '../../services/GetData';
import { Editor } from '@tinymce/tinymce-react';

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
    getData('api_article/' + article, token)
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON);
        this.setState({ article: resJSON });
      });
  }

  render() {
    return (
      <>
        <div className="page-content mx-5">
          <div className="content-flex">
            <div id="title" className="custom-text">
              <h2>Title</h2>
            </div>
            <div className="custom-text flex-grow-1">
              <div className="flex-grow-1">
                <Editor
                  apiKey="3yn19ck0mgv6qus3qkej8vrfp9x3q45am4ikvprcke9nzs7q"
                  init={
                    {
                      /* your other settings */
                    }
                  }
                />
              </div>
              <br /> <br />
            </div>
            <div className="row custom-text">
              <div className="ml-auto">
                <h4>Autor: NAME</h4>
              </div>
            </div>
            <div className="row custom-text mb-5">
              <p className="custom-text">tags:TAG_NAME</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
