import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';

import LogoImg from '../../assets/logo.png';

import { Container, Logo, Content } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('@grupoW') ?? '');
  if (!user.id) {
    localStorage.removeItem('@grupoW');
    history.push('/login');
  }

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo GrupoW" />
      <Content>
        <div>
          <img src={user.img} alt="Imagem do Usuário" />
          <div>
            <span>Bem vindo,</span>
            <span>{user.id}</span>
          </div>
        </div>
        <FiPower />
      </Content>
    </Container>
  );
};

export default Header;
