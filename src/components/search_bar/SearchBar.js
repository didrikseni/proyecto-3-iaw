import React from 'react';

function SearchBar() {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-8">
        <div className="form-group">
          <br />
          <input type="text" className="form-control" name="article" aria-describedby="helpId" placeholder="Buscar artículo" />
        </div>
      </div>
      <div className="col-auto">
        <button className="custom-button">Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
