import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getUser } from '../../services/userAPI';
import './Profile.css';

class Profile extends Component {
  state = {
    User: {},
  };

  async componentDidMount() {
    const User = await getUser();
    this.setState({ User });
  }

  render() {
    const { User } = this.state;
    const { name, image, email, description } = User;
    return (
      <div data-testid="page-profile" className="PF">
        <Header />
        <div className="mainPf">
          <div className="headerPF" />
          <div className="perfil">
            <div className="imgProf">
              <img src={ image } alt="" className="imgimg" />
            </div>
            <div className="infosPf">
              <h3>Nome:</h3>
              <p>{ name }</p>
              <h3>Email:</h3>
              <p>{ email }</p>
              <h3>Descrição</h3>
              <p className="descriArea">{ description }</p>
            </div>
            <Link to="/profile/edit">
              <p className="btnProf">Editar</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
