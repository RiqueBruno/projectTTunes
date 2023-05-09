import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard/MusicCard';
import './Album.css';

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
      <main data-testid="page-album" className="Album">
        <Header />
        <article className="article">
          <div className="heartBG" />
          <div className="cardAreaAlbumImg">
            <div className="imgAreaAlbum">
              <img src={ artworkUrl100.replaceAll('100x100bb', '400x400bb') } alt="" />
            </div>
            <div className="textAreaAlbum">
              <h3 data-testid="album-name">
                { collectionName }
              </h3>
              <h4 data-testid="artist-name">
                { artistName }
              </h4>
            </div>
          </div>
          <div className="cardAreaAlbumInfo">
            <ul className="listMusicsArea">
              {collection.slice(1).map(
                ({ trackName, previewUrl, trackId }) => (
                  <li key={ Math.random() } className="prevMusicArea">
                    <MusicCard
                      key={ Math.random() }
                      trackName={ trackName }
                      previewUrl={ previewUrl }
                      trackId={ trackId }
                    />
                  </li>),
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
