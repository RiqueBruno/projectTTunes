import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Favoritos from '../../Imagens/Icons/FavHeader.png';
import Pesquisar from '../../Imagens/Icons/pesquisarHeader.png';
import Perfil from '../../Imagens/Icons/perfilHeader.png';
import logo from '../../Imagens/Login/logo.png';
import './Header.css';

class Header extends Component {
  state = {
    isLoading: true,
    nameUser: '',
    image: '',
  };

  async componentDidMount() {
    const { name, image } = await getUser();
    this.setState({
      isLoading: false,
      nameUser: name,
      image,
    });
  }

  render() {
    const { isLoading, nameUser, image } = this.state;
    return (
      <header data-testid="header-component" className="divHeader">
        <div className="UserOrLoading" data-testid="header-user-name">
          <div className="imgLogo">
            <img src={ logo } alt="" className="logo" />
          </div>
          <nav className="DivLinks">
            <div className="link">
              <img src={ Pesquisar } alt="" className="icon" />
              <Link
                to="/search"
                className="textLink"
                data-testid="link-to-search"
              >
                Pesquisar
              </Link>
            </div>
            <div className="link">
              <img src={ Favoritos } alt="" className="icon" />
              <Link
                to="/favorites"
                className="textLink"
                data-testid="link-to-favorites"
              >
                Favoritos
              </Link>
            </div>
            <div className="link">
              <img src={ Perfil } alt="" className="icon" />
              <Link
                to="/profile"
                className="textLink"
                data-testid="link-to-profile"
              >
                Perfil
              </Link>
            </div>
          </nav>
          {isLoading ? (
            <div className="loadings">
              <div className="circulo-dentros" />
              <div className="circulos" />
              <p>Carregando...</p>
            </div>
          ) : (
            <div className="perfils">
              <div className="imgftHeader">
                <img src={ image } alt="foto" />
              </div>
              <p className="nameUserHeader">{nameUser}</p>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
