import * as React from 'react';
import { getData } from '../../services/GetData';
import { Editor } from '@tinymce/tinymce-react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/navbar';
import '../../css/App.css';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTags: true,
      content: localStorage.getItem('content'),
      title: localStorage.getItem('title'),
      description: localStorage.getItem('description'),
      tags: localStorage.getItem('tags'),
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.changeLocalStorage = this.changeLocalStorage.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
  }

  componentDidMount() {
    let content = localStorage.getItem('content');
    let title = localStorage.getItem('title');
    let description = localStorage.getItem('description');
    let tags = localStorage.getItem('tags');
    this.setState({
      content: content ? content : '',
      title: title ? title : '',
      description: description ? description : '',
      tags: tags ? content : '',
    });

    let token = sessionStorage.getItem('access_token');
    getData('api_tags', token)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({ tags: resJSON, loadingTags: false });
      });
  }

  componentWillUnmount() {
    this.clearLocalStorage();
  }

  clearLocalStorage() {
    localStorage.removeItem('title');
    localStorage.removeItem('description');
    localStorage.removeItem('content');
    localStorage.removeItem('tags');
  }

  changeLocalStorage(elem, value) {
    if (localStorage.getItem(elem)) {
      localStorage.removeItem(elem);
    }
    localStorage.setItem(elem, value);
  }

  onChange(elem) {
    this.setState({ [elem.target.name]: elem.target.value });
    this.changeLocalStorage(elem.target.name, elem.target.value);
  }

  onChangeEditor(content, editor) {
    this.setState({ content: content.target.getContent() });
    this.changeLocalStorage('content', content.target.getContent());
  }

  render() {
    return (
      <>
        <Navbar />
        <form>
          <div className="page-content mx-5">
            <div className="content-flex">
              <div className="form-group">
                <label for="title">Título</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="helpTitle"
                  placeholder="Titulo del artículo.."
                  onChange={this.onChange}
                  value={this.state.title ? this.state.title : ''}
                />
                <small id="helpTitle" className="form-text text-muted">
                  Ingrese un título
                </small>
              </div>

              <div className="form-group">
                <label for="description">Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                  aria-describedby="helpDescription"
                  placeholder="Descripción del artículo.."
                  onChange={this.onChange}
                  value={this.state.description ? this.state.description : ''}
                />
                <small id="helpDescription" className="form-text text-muted">
                  Ingrese una descripción sobre que temas trata el artículo
                </small>
              </div>

              <div className="form-group">
                <label for="content">Contenido</label>
                <Editor
                  value={this.state.content}
                  onChange={this.onChangeEditor}
                  apiKey="3yn19ck0mgv6qus3qkej8vrfp9x3q45am4ikvprcke9nzs7q"
                  init={{
                    toolbar_mode: 'floating',
                    toolbar:
                      'undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | image link table | pagebreak | preview',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    branding: false,
                    plugins: [
                      'advlist autolink lists link image imagetools charmap print preview hr anchor pagebreak',
                      'searchreplace wordcount visualblocks visualchars code fullscreen',
                      'insertdatetime nonbreaking save table contextmenu directionality',
                      'emoticons template paste textcolor colorpicker textpattern autoresize',
                    ],
                    min_height: 600,
                    images_upload_url: '/articles/image/upload',
                    automatic_uploads: false,
                  }}
                />

                <textarea className="form-control" name="content" id="content" rows="20" style={{ display: 'none' }}></textarea>
              </div>

              <div className="form-group">
                <label for="tags">Seleccionar los tags</label>
                {this.state.loadingTags ? (
                  <p>Loading tags...</p>
                ) : (
                  <select multiple className="form-control" name="tags[]" id="tags">
                    {this.state.tags.map((tag) => (
                      <option key={tag.id} value={tag.id} onChange={this.onChange}>
                        {tag.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>

          <div className="form-group row justify-content-end mr-5">
            <div className="col-auto">
              <button className="custom-button">Publicar</button>
            </div>
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

export default NewArticle;
