import React, { Component } from 'react';

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
      <div>
        <div>
          <img
            src={ artworkUrl100 }
            alt={ `Capa do album ${collectionName} de ${artistName}` }
          />
        </div>
        <p data-testid="album-name">{ collectionName }</p>
        <p data-testid="artist-name">{ artistName }</p>

      </div>
    );
  }
}

export default AlbumCard;
