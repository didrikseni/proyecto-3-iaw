import * as React from 'react';

class Article extends React.Component {
  componentDidMount() {
    const { handle } = this.props.match.params;
    console.log(handle);
  }

  render() {
    return (
      <>
        <div id="content-flex">
          <div id="title" className="custom-text">
            <h2>Title</h2>
          </div>
          <div className="custom-text flex-grow-1">
            <div className="flex-grow-1">
              <textarea className="form-control flex-grow-1" type="text" name="content" id="content" value="CONTENIDO" />
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
      </>
    );
  }
}

export default Article;
