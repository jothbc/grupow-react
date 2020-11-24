import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isErrored?: boolean;
}

const Input: React.FC<InputProps> = ({ name, isErrored = false, ...rest }) => {
  return (
    <Container isErrored={isErrored}>
      <input type="text" name={name} {...rest} />
    </Container>
  );
};

export default Input;
