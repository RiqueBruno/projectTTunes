import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ProfileEdit.css';
import { getUser, updateUser } from '../../services/userAPI';

class ProfileEdit extends Component {
  state = {
    User: {},
    name: '',
    email: '',
    image: '',
    description: '',
  };

  async componentDidMount() {
    const User = await getUser();
    const { name, image, email, description } = User;
    this.setState({
      User,
      name,
      email,
      image,
      description,
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  saveProfileEdit = () => {
    let { User } = this.state;
    const { name, email, image, description } = this.state;
    const userUpdate = {
      name,
      email,
      image,
      description,
    };
    User = userUpdate;
    updateUser(User);
  };

  render() {
    const { User, image } = this.state;
    const { name, email, description } = User;
    User.image = image;
    return (
      <div data-testid="page-profile-edit" className="PFE">
        <Header />
        <div className="mainPfE">
          <div className="headerPFE" />
          <Link to="/profile">
            <button
              className="btneditp"
              type="reset"
              onClick={ this.saveProfileEdit }
            >
              Salvar

            </button>
          </Link>
          <div className="perfilE">
            <label className="imgProfE" htmlFor="inputs">
              <input type="checkbox" id="inputs" className="check" />
              <input
                onChange={ this.handleChange }
                defaultValue={ image }
                type="text"
                className="urlImg"
                name="image"
                id="inputs"
              />
              <p id="p" name="input" />
              <img
                id="img"
                src={ image }
                alt="Sua foto de perfil"
                className="imgimgE"
              />
            </label>
            <div className="infosPfE">
              <h3>Nome:</h3>
              <input
                onChange={ this.handleChange }
                type="text"
                name="name"
                id=""
                defaultValue={ name }
              />
              <h3>Email:</h3>
              <input
                onChange={ this.handleChange }
                type="email"
                name="email"
                id=""
                defaultValue={ email }
              />
              <h3>Descrição</h3>
              <textarea
                onChange={ this.handleChange }
                name="description"
                id=""
                cols="30"
                rows="5"
                className="txtarea"
                defaultValue={ description }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;
