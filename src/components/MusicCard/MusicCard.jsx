import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading/Loading';

class MusicCard extends Component {
  state = {
    checked: false,
    loading: false,
  };

  async componentDidMount() {
    const { trackId } = this.props;
    this.setState({
      loading: true,
    });
    const favoriteSongs = await getFavoriteSongs();
    const check = favoriteSongs.some((song) => song.trackId === trackId);
    this.setState({
      loading: false,
      checked: check,
    });
  }

  handleChange = async () => {
    const { trackId } = this.props;
    const { checked } = this.state;
    const getMusic = await getMusics(trackId);
    this.setState({
      loading: true,
    });
    if (checked === true) {
      await removeSong(getMusic[0]);
      this.setState({
        loading: false,
        checked: false,
      });
    } else {
      await addSong(getMusic[0]);
      this.setState({
        loading: false,
        checked: true,
      });
    }
  };

  render() {
    const { checked, loading } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <div>
        {loading ? (<Loading />)
          : (
            <div>
              <p>{ trackName }</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <label htmlFor="fav">
                Favorita
                <p>🖤</p>
                <input
                  data-testid={ `checkbox-music-${trackId}` }
                  onChange={ this.handleChange }
                  type="checkbox"
                  name="favorite"
                  id="fav"
                  checked={ checked }
                />
              </label>
            </div>)}
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
