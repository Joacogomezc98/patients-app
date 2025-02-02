import styled from 'styled-components';

export const Container = styled.button<{
  color: string;
  backgroundColor: string;
  align?: string;
}>`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  gap: 10px;
`;
