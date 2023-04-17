import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends Component {
  render() {
    const { artistName, artworkUrl100, collectionName, collectionId } = this.props;
    return (
      <div>
        <div>
          <img src={ artworkUrl100 } alt="Foto do album" />
        </div>
        <p>{ collectionName }</p>
        <p>{ artistName }</p>
        <Link
          to={ `/album/${collectionId}` }
          className="textLink"
          data-testid={ `link-to-album-${collectionId}` }
        >
          Saiba Mais
        </Link>
      </div>
    );
  }
}

export default AlbumCard;

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
