import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import './Favorites.css';
// import { getFavoriteSongs } from '../../services/favoriteSongsAPI';

class Favorites extends Component {
  state = {
    FavoriteList: [],
  };

  componentDidMount() {
    const FavoriteList = JSON.parse(localStorage.getItem('favorite_songs'));
    this.setState({ FavoriteList });
  }

  onChage = () => {
    const FavoriteList = JSON.parse(localStorage.getItem('favorite_songs'));
    this.setState({ FavoriteList });
  };

  render() {
    const { FavoriteList } = this.state;
    const hasFavorite = FavoriteList.length > 0;
    return (
      <div data-testid="page-favorites" className="mainFav">
        <Header />
        <article className="articleFav">
          <section className="FavHeader">
            <h1>💖 FAVORITOS 💖</h1>
          </section>
          <section className="FavBody">
            <ul>
              {hasFavorite ? (FavoriteList.map(({ trackName, previewUrl, trackId }) => (
                <li key={ Math.random() }>
                  <MusicCard
                    key={ Math.random() }
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    trackId={ trackId }
                    onChange={ this.onChage }
                  />
                </li>)))
                : (<p>Lista vazia. Adicione alguma música em seus favoritos.</p>
                )}
            </ul>
          </section>
        </article>
      </div>
    );
  }
}

export default Favorites;
