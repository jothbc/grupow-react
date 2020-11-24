import styled, { css } from 'styled-components';

interface InputProps {
  isErrored?: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;

  background: #232129;
  border-radius: 10px;
  padding: 8px 16px;
  border: 2px solid transparent;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #cc0000;
    `}

  input {
    background: transparent;
    border: none;
    color: #f4ede8;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      color: 666360;
    }
  }
  & + div {
    margin-top: 8px;
  }
`;
