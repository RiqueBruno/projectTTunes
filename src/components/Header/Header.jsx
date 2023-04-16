import React, { Component } from 'react';
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
          {isLoading ? (<p>Carregando...</p>) : (<div>{nameUser}</div>)}
        </header>
      </div>
    );
  }
}

export default Header;
