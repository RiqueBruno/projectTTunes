import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Search extends Component {
  state = {
    artist: '',
    button: true,
    isLoading: false,
  };

  onInputChange = () => {
    const { artist } = this.state;
    const min = 2;
    if (artist.length >= min) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      artist: value,
    }, this.onInputChange);
  };

  btnClick = async () => {
    // farei a seguir
  };

  render() {
    const { button, isLoading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <header>
          <div>
            <input
              onChange={ this.handleChange }
              type="text"
              name="artist"
              data-testid="search-artist-input"
              placeholder="Nome do Artista"
            />
            <button
              onClick={ this.btnClick }
              type="button"
              data-testid="search-artist-button"
              disabled={ button }
            >
              Pesquisar
            </button>
          </div>
        </header>
        <body>
          {isLoading ? (<p>Carregando...</p>) : (<article>a</article>)}
        </body>
      </div>
    );
  }
}

export default Search;
