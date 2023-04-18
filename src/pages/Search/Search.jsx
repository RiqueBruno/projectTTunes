import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import getMusics from '../../services/musicsAPI';

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
    const aa = await getMusics('1440818588');
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
      <div data-testid="page-search">
        <Header />
        {isLoading ? (<p>Carregando...</p>) : (
          <div className="container">
            <header>
              <div>
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
            <article>
              <div>
                {
                  albuns.length > 0 ? (
                    <>
                      <p>{`Resultado de álbuns de: ${artist} `}</p>
                      <div>
                        {albuns.map(
                          (album) => (
                            <>
                              <AlbumCard
                                key={ album.collectionId }
                                artistName={ album.artistName }
                                artworkUrl100={ album.artworkUrl100 }
                                collectionName={ album.collectionName }
                                collectionId={ album.collectionId }
                              />
                              <Link
                                key={ album.artworkUrl100 }
                                to={ `/album/${album.collectionId}` }
                                className="textLink"
                                data-testid={ `link-to-album-${album.collectionId}` }
                              >
                                Saiba Mais
                              </Link>
                            </>),
                        )}

                      </div>
                    </>
                  ) : (<p>{hasAlbuns}</p>)
                }
              </div>
            </article>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
