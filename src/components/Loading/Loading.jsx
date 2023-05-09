import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="BG">
        <div className="loading">
          <p>Carregando...</p>
          <div className="circulo-dentro" />
          <div className="circulo" />
        </div>
      </div>
    );
  }
}

export default Loading;
