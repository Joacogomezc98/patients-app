import React from 'react';
import { Container } from './style';

interface Props {
  text: string;
  icon?: JSX.Element;
  textColor: string;
  backgroundColor: string;
  onClick: () => void;
}

export const Actionbutton: React.FC<Props> = ({
  textColor,
  backgroundColor,
  onClick,
  text,
  icon,
}) => {
  return (
    <Container
      color={textColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {icon}
      {text}
    </Container>
  );
};
