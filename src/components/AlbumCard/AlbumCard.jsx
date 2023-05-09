import React, { Component } from 'react';
import './AlbumCard.css';

import PropTypes from 'prop-types';

class AlbumCard extends Component {
  componentDidMount() {
    AlbumCard.propTypes = {
      artistName: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      collectionName: PropTypes.string.isRequired,
    };
  }

  render() {
    const { artistName, artworkUrl100, collectionName } = this.props;
    return (
      <div className="AlbumCard">
        <div className="imgAlbumCardArea">
          <img
            className="imgAlbumCard"
            src={ artworkUrl100.replaceAll('100x100bb', '150x150bb') }
            alt={ `Capa do album ${collectionName} de ${artistName}` }
          />
        </div>
        <div className="textAlbumCardArea">
          <p data-testid="album-name" className="AlbumCardName">{ collectionName }</p>
          <p data-testid="artist-name" className="ArtistName">{ artistName }</p>
        </div>
      </div>
    );
  }
}

export default AlbumCard;
