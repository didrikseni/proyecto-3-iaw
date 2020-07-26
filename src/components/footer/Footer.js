import React from 'react';
import '../../css/navbar.css';
import '../../css/App.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.shareOnFacebook = this.shareOnFacebook.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }

  shareOnTwitter() {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href),
      'facebook-share-dialog',
      'width=600,height=400'
    );
    return false;
  }

  shareOnFacebook() {
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), 'twitter-share-dialog', 'width=600,height=400');
    return false;
  }

  render() {
    return (
      <footer className="page-footer pt-4 mt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0">
              <h5 className="custom-text-navbar">Ayudando a aprender</h5>
            </div>
            <div className="col-md-4 mb-md-0">
              <h5 className="custom-text-navbar">Preguntas frecuentes</h5>
              <ul className="list-unstyled"></ul>
              <h5 className="custom-text-navbar">Términos y condiciones</h5>
            </div>

            <div className="col-md-auto mb-md-0">
              <h5 className="custom-text-navbar">Compartir</h5>
              <ul className="list-unstyled">
                <div className="btn">
                  <i className="fab fa-facebook-f fa-lg" onClick={this.shareOnTwitter}></i>
                </div>
                <div className="btn">
                  <i className="fab fa-twitter p-3 fa-lg" onClick={this.shareOnFacebook}></i>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-copyright text-center pb-2">
          <div className="row justify-content-center">
            <div className="col-auto">
              <p className="custom-text-navbar">Acerca del autor</p>
            </div>
            <div className="col-auto">
              <a href="https://github.com/didrikseni">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.linkedin.com/in/iandidriksen/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
