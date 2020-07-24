import React from 'react';
import TinyMCE from 'react-tinymce';

class Editor extends React.Component {
  handleEditorChange = (e) => {
    console.log('e', e);
    console.log('Content was updated:', e.target.getContent());
  };

  render() {
    return (
      <div>
        <input id="my-file" type="file" name="my-file" style={{ display: 'none' }} onChange="" />

        <TinyMCE
          content="<p>This is the initial content of the editor</p>"
          config={{
            //   selector: '.post-article #' + editorId,
            height: 400,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace wordcount visualblocks code fullscreen',
              'insertdatetime media table contextmenu paste code',
            ],
            toolbar:
              'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_css: '//www.tinymce.com/css/codepen.min.css',
            file_browser_callback_types: 'image',
            file_picker_callback: function (callback, value, meta) {
              if (meta.filetype == 'image') {
                var input = document.getElementById('my-file');
                input.click();
                input.onchange = function () {
                  var file = input.files[0];
                  var reader = new FileReader();
                  reader.onload = function (e) {
                    console.log('name', e.target.result);
                    callback(e.target.result, {
                      alt: file.name,
                    });
                  };
                  reader.readAsDataURL(file);
                };
              }
            },
            paste_data_images: true,
          }}
          onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default Editor;
