import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard/MusicCard';

class Album extends Component {
  state = {
    artistName: '',
    artworkUrl100: '',
    collectionName: '',
    collection: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const collection = await getMusics(id);
    const artist = collection.map(({ artistName }) => artistName)[0];
    const imgAlbum = collection.map(({ artworkUrl100 }) => artworkUrl100)[0];
    const nameAlbum = collection.map(({ collectionName }) => collectionName)[0];
    this.setState({
      artistName: artist,
      artworkUrl100: imgAlbum,
      collectionName: nameAlbum,
      collection,
    });
  }

  render() {
    const { artistName, artworkUrl100, collectionName, collection } = this.state;
    return (
      <main data-testid="page-album">
        <header>
          <Header />
        </header>
        <article>
          <div>
            <AlbumCard
              data-testid="artist-name"
              artistName={ artistName }
              artworkUrl100={ artworkUrl100 }
              collectionName={ collectionName }
            />
          </div>
          <div>
            <ul>
              {collection.slice(1).map(
                ({ trackName, previewUrl, trackId }) => (<MusicCard
                  key={ Math.random() }
                  trackName={ trackName }
                  previewUrl={ previewUrl }
                  trackId={ trackId }
                />),
              )}
            </ul>
          </div>
        </article>
      </main>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
