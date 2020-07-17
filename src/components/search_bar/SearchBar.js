import React from 'react';

function SearchBar() {
  return (
    <div className="row">
      <div className="col-8">
        <div className="form-group">
          <label for="">Buscar Artículo</label>
          <input type="text" className="form-control" name="article" aria-describedby="helpId" placeholder="Artículo" />
        </div>
      </div>
      <div className="col-4 ml-auto">
        <button className="custom-button">Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
