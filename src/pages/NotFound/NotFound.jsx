import React, { Component } from 'react';
import sadImage from '../../Imagens/Login/triste.png';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="mainDivNF">
        <div className="imgNF">
          <img src={ sadImage } alt="Desculpe, mas este caminho não existe. " />
        </div>
        <div data-testid="page-not-found" className="divNF">NotFound</div>
      </div>
    );
  }
}

export default NotFound;
