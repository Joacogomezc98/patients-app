import styled from 'styled-components';
import { NotificationType } from '.';

export const Container = styled.div<{ type?: NotificationType }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) =>
    props.type === NotificationType.SUCCESS ? '#5cd160cd' : '#f443368e'};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  button {
    border: none;
    background-color: transparent;
  }
`;
