import React, { Component } from 'react';
import './LoadingAlternative.css';

class LoadingAlternative extends Component {
  render() {
    return (
      <div className="BGA">
        <div className="loadingA">
          <p>Carregando...</p>
          <div className="circulo-dentroA" />
          <div className="circuloA" />
        </div>
      </div>
    );
  }
}

export default LoadingAlternative;
