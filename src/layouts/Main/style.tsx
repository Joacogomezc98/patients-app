import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  gap: 20px;
`;

export const Title = styled.div`
  margin: 0;
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  height: 40px;
  background-color: white;
  img {
    height: 30px;
  }
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
  border-radius: 20px;
  padding: 0px 40px 20px 40px;
  width: calc(100% - 80px);
  transition: all 0.3s ease-in-out;
  overflow: auto;

  // Remove scrollbar for better UI
  &::-webkit-scrollbar {
    display: none;
  }
`;
