import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
  state = {
    nameUser: '',
    button: true,
    isLoading: false,
  };

  onInputChange = () => {
    const { nameUser } = this.state;
    const min = 3;
    if (nameUser.length >= min) {
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
      nameUser: value,
    }, this.onInputChange);
  };

  btnClick = async () => {
    const { nameUser } = this.state;
    const { history } = this.props;
    this.setState({ isLoading: true });
    await createUser({ name: nameUser });
    this.setState({ isLoading: false });
    history.push('/search');
  };

  render() {
    const { button, isLoading } = this.state;
    return (
      <div data-testid="page-login" className="BG">
        <div className="imgBG" />
        { isLoading ? (<Loading />) : (
          <section className="CenterPart">
            <div className="img" />
            <label htmlFor="name">
              <input
                onChange={ this.handleChange }
                type="text"
                name="nameUser"
                id="name"
                placeholder="Qual o seu nome?"
                className="input"
                data-testid="login-name-input"
              />
            </label>
            <button
              className="button"
              onClick={ this.btnClick }
              type="button"
              data-testid="login-submit-button"
              disabled={ button }
            >
              Entrar
            </button>
          </section>
        )}
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
