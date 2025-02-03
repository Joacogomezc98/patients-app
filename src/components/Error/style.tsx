import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 35px;
    line-height: 65px;
    text-align: center;

    color: #6b7783;
  }
`;
