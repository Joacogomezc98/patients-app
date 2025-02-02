import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: Ubuntu, sans-serif;
    font-size: 1.2;
    font-weight: 500;
    line-height: 1.2;
    color: rgb(29 33 47);
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-family: Ubuntu, sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(29 33 47);
    margin: 0;
  }
`;

export const CloseButton = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const ButtonsSection = styled.div<{ editMode: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) =>
    props.editMode ? 'space-between' : 'flex-end'};
  div {
    display: flex;
    align-items: center;
  }
`;

// Form Styles
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 30px;
  label {
    font-family: Ubuntu, sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(29 33 47);
    margin: 0;
    width: 70px;
  }
  p {
    font-family: Ubuntu, sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(29 33 47);
    margin: 0;
  }
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: transparent;
  height: 20px;
  font-family: Ubuntu, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(29 33 47);
  padding: 5px;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  /* outline: none; */
  min-height: 100px;
  width: 100%;
  resize: none;
  background-color: transparent;
  font-family: Ubuntu, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(29 33 47);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-grow: 1;
  h3 {
    margin: 0;
    font-size: 0.7rem;
    color: rgb(107 114 128);
  }
`;
