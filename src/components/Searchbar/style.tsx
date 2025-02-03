import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  height: 34px;
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  background: #ffffff;
  border: 1px solid #c3c8ce;
  border-radius: 5px;

  width: 280px;
  height: 34px;

  input {
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
    padding: 0px 0px 0px 5px;
    color: #6b7783;
    font-family: Nunito;
  }

  input:focus {
    outline: none;
  }
`;
