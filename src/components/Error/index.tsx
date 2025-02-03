import React from 'react';
import { Container } from './style';
import { getIcons } from '../../utils/utils';

interface Props {
  text: string;
}

export const ErrorComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <Container>
      {getIcons('error')}
      <h1>{text}</h1>
    </Container>
  );
};
