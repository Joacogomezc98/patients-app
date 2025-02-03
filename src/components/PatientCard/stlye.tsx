import styled from 'styled-components';
import { getColorFromInitials } from '../../utils/utils';

export const Container = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgb(230 232 235);
  width: calc(100% - 40px);
  max-width: 400px;
  height: 110px;
  min-height: ${(props) => (props.isExpanded ? '250px' : '110px')};
  grid-column: ${(props) => (props.isExpanded ? 'span 2' : 'span 1')};
  gap: 10px;
  cursor: pointer;
  position: relative; /* Ensures the expanded content stays within the card */
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    min-height 0.3s ease-in-out,
    width 1s ease-in-out;
  &:hover {
    // Make the card slightly pop up on hover
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #f8f9fa;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 20px;
  flex-grow: 1;
  h3 {
    margin: 0;
    font-size: 0.7rem;
    color: rgb(107 114 128);
  }
`;

export const PatientInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 1rem;
    color: #1d212f;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  flex-shrink: 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ProfileImage = styled.div<{ initials: string }>`
  font-family: Arial, Helvetica, sans-serif;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ initials }) => getColorFromInitials(initials)};
  font-size: 25px;
  color: white;
  text-align: center;
  line-height: 50px;
  flex-shrink: 0;
`;

export const ExpandIcon = styled.div`
  align-self: flex-end;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  height: 24px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const ExpandedSection = styled.div`
  flex-grow: 1; /* Makes sure it takes available space evenly */
  padding-top: 10px;
  border-top: 1px solid #ddd;
  animation: fadeIn 0.3s ease-in-out;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  h3,
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
