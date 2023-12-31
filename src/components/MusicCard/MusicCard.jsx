import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import LoadingAlternative from '../Loading/LoadingAlternative';
import './MusicCard.css';

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
    const { trackId, onChange } = this.props;
    const { checked } = this.state;
    // this.setState({
    //   loading: true,
    // });
    const getMusic = await getMusics(trackId);
    if (checked) {
      this.setState({
        // loading: false,
        checked: false,
      });
      removeSong(getMusic[0]);
      onChange();
    }
    if (!checked) {
      this.setState({
        // loading: false,
        checked: true,
      });
      addSong(getMusic[0]);
    }
  };

  render() {
    const { checked, loading } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <div className="mainCompMusicCard">
        {loading ? (<LoadingAlternative />)
          : (
            <div className="musicCardComp">
              <p>{ trackName }</p>
              <div className="Music">
                <audio
                  className="audio"
                  data-testid="audio-component"
                  src={ previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <div className="container">
                  <label htmlFor={ trackId } className="fav">
                    <input
                      data-testid={ `checkbox-music-${trackId}` }
                      onChange={ this.handleChange }
                      type="checkbox"
                      name="favorite"
                      className="heart"
                      id={ trackId }
                      checked={ checked }
                    />
                    <span>
                      ❤
                    </span>
                  </label>
                </div>
              </div>
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
  onChange: PropTypes.func.isRequired,
};
