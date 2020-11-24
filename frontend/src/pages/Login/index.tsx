import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Section, Background } from './styles';

import LogoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import api from '../../services/api';

const Login: React.FC = () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await api.get(`/user?id=${login}&pass=${password}`);
        setError(false);

        if (response.data[0]) {
          const user = response.data[0];
          const responseImg = await api.get(`/images?id=${user.id}`);
          user.img = responseImg.data[0].img;
          localStorage.setItem('@grupoW', JSON.stringify(user));
          history.push('/dashboard');
        } else {
          setError(true);
        }

        // setar usuario
        // redirecionar para dashboard
      } catch (err) {
        setError(true);
      }
    },
    [login, password],
  );

  return (
    <Container>
      <Section>
        <form onSubmit={handleSubmit}>
          <img src={LogoImg} alt="" />
          <h3>Faça seu login</h3>

          <Input
            name="login"
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
            isErrored={error}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            isErrored={error}
          />

          <button type="submit">Entrar</button>
        </form>
      </Section>
      <Background />
    </Container>
  );
};

export default Login;
