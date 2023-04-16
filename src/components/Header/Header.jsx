import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';

class Header extends Component {
  state = {
    isLoading: true,
    nameUser: '',
  };

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({
      isLoading: false,
      nameUser: name,
    });
  }

  render() {
    const { isLoading, nameUser } = this.state;
    return (
      <div data-testid="header-component">
        <header className="UserOrLoading" data-testid="header-user-name">
          <div className="imgLogo">
            <img src="" alt="" className="logo" />
          </div>
          <div className="link">
            <img src="" alt="" className="icon" />
            <Link
              to="/search"
              className="textLink"
              data-testid="link-to-search"
            >
              Pesquisar
            </Link>
          </div>
          <div className="link">
            <img src="" alt="" className="icon" />
            <Link
              to="/favorites"
              className="textLink"
              data-testid="link-to-favorites"
            >
              Favoritos
            </Link>
          </div>
          <div className="link">
            <img src="" alt="" className="icon" />
            <Link
              to="/profile"
              className="textLink"
              data-testid="link-to-profile"
            >
              Perfil
            </Link>
          </div>
          {isLoading ? (<p>Carregando...</p>) : (<div>{nameUser}</div>)}
        </header>
      </div>
    );
  }
}

export default Header;
