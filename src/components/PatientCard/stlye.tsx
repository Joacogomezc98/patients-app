import styled from 'styled-components';
import { getColorFromInitials } from '../../utils/utils';

export const Container = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: calc(100% - 40px);
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
  position: relative;
  width: 100%;
  gap: 20px;
  flex-grow: 1;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #1d212f;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  h3 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 0.7rem;
    color: #1d212f;
  }
`;

export const ProfileImage = styled.div<{ initials: string }>`
  font-family: Arial, Helvetica, sans-serif;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ initials }) => getColorFromInitials(initials)};
  font-size: 25px;
  color: white;
  text-align: center;
  line-height: 70px;
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
