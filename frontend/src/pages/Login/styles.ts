import styled from 'styled-components';

import { shade } from 'polished';
import BackgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;
export const Section = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 0 24px;

    h3 {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      padding: 34px 0 24px;
    }

    button {
      margin-top: 24px;
      width: 100%;
      background: #ff9000;
      border-radius: 10px;
      padding: 10px;
      border: none;

      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      color: #312e38;
      transition: 300ms;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;
export const Background = styled.div`
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
