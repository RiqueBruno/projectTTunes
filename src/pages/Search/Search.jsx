import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import getMusics from '../../services/musicsAPI';
import './Search.css';

class Search extends Component {
  state = {
    inputText: '',
    button: true,
    isLoading: false,
    artist: '',
    hasAlbuns: '',
    albuns: [],
  };

  onInputChange = () => {
    const { inputText } = this.state;
    const min = 2;
    if (inputText.length >= min) {
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
      inputText: value,
    }, this.onInputChange);
  };

  btnClick = async () => {
    const { inputText } = this.state;
    this.setState({
      isLoading: true,
      artist: inputText,
    });
    const albuns = await searchAlbumsAPI(inputText);
    const hasAlbum = albuns.length === 0;
    const aa = await getMusics('1640278305');
    console.log(aa);
    if (hasAlbum) {
      this.setState({
        inputText: '',
        isLoading: false,
        hasAlbuns: 'Nenhum álbum foi encontrado',
        albuns,
      });
    }
    if (!hasAlbum) {
      this.setState({
        inputText: '',
        isLoading: false,
        hasAlbuns: '',
        albuns,
      });
    }
  };

  render() {
    const { button, isLoading, artist, albuns, hasAlbuns } = this.state;
    return (
      <main data-testid="page-search" className="page-search">
        <Header />
        {isLoading ? (<p>Carregando...</p>) : (
          <div className="containers">
            <header className="headerSearch">
              <div className="searchArea">
                <input
                  onChange={ this.handleChange }
                  type="text"
                  name="inputText"
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
            <article className="articleSearch">
              <div className="resultArea">
                {
                  albuns.length > 0 ? (
                    <section>
                      <p className="p">{`Resultado de álbuns de: ${artist} `}</p>
                      <div className="albunsOnSearch">
                        {albuns.map(
                          (album) => (
                            <Link
                              key={ album.artworkUrl100 }
                              to={ `/album/${album.collectionId}` }
                              className="textLink"
                              data-testid={ `link-to-album-${album.collectionId}` }
                            >
                              <AlbumCard
                                key={ album.collectionId }
                                artistName={ album.artistName }
                                artworkUrl100={ album.artworkUrl100 }
                                collectionName={ album.collectionName }
                                collectionId={ album.collectionId }
                              />

                            </Link>
                          ),
                        )}

                      </div>
                    </section>
                  ) : (<p>{hasAlbuns}</p>)
                }
              </div>
            </article>
          </div>
        )}
      </main>
    );
  }
}

export default Search;
