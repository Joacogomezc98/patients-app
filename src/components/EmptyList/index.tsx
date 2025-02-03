import React from 'react';
import { Container } from './style';

interface Props {
  name: string;
}

export const EmptyList: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <img alt="empty" src={'EmptyIcon.png'} />
      <h1>No {name} found</h1>
      <h2>Please come back later</h2>
    </Container>
  );
};
