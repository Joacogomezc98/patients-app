import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  height: calc(100vh - 40px);
  width: calc(100vw - 80px);
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: white;
`;

export const LoaderContainer = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px - 35px - 20px);
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #7345fc;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  background-color: rgb(227 232 244);
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 40px);
  height: calc(
    100% - 40px - 35px - 20px
  ); //cover entire page - padding - title - gap
  transition: all 0.3s ease-in-out;
  overflow: auto;

  // Remove scrollbar for better UI
  &::-webkit-scrollbar {
    display: none;
  }
`;
