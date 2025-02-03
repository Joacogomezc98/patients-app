import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-self: center;
  justify-self: center;

  flex: 1;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #6b7783;
  }

  h2 {
    font-family: 'Nunito';
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
    color: #6b7783;
  }
`;
