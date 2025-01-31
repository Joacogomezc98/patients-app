import React, { useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  Container,
  DataContainer,
  DetailsContainer,
  ExpandedSection,
  ExpandIcon,
  MainInfoContainer,
  ProfileImage,
} from './stlye';
import moment from 'moment';
import { getIcons, getInitials } from '../../utils/utils';
import { Patient } from '../../redux/patients/patients.types';

interface Props {
  patient: Patient;
}

export const PatientCard: React.FC<Props> = ({ patient }) => {
  //Handle error for missing img or not available ones
  const [imgError, setImgError] = useState<boolean>(false);

  const [userInitials, setUserInitials] = useState<string>('');

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [arrowHover, setArrowHover] = useState(false);

  useEffect(() => {
    setUserInitials(getInitials(patient.name));
  }, [patient]);

  //Functions
  const handleClick = () => setIsExpanded((prev) => !prev);
  const handleMouseEnter = () => setArrowHover(true);
  const handleMouseLeave = () => setArrowHover(false);

  //Icon handling
  const iconType = useMemo(() => {
    return isExpanded
      ? arrowHover
        ? 'arrowUpBlue'
        : 'arrowUp'
      : arrowHover
        ? 'arrowDownBlue'
        : 'arrowDown';
  }, [isExpanded, arrowHover]);

  return (
    <Container isExpanded={isExpanded}>
      <MainInfoContainer>
        {imgError ? (
          <ProfileImage initials={userInitials}>{userInitials}</ProfileImage>
        ) : (
          <Avatar src={patient.avatar} onError={() => setImgError(true)} />
        )}
        <DataContainer>
          <h2>{patient.name}</h2>
          <DetailsContainer>
            <h3>#{patient.id}</h3>
            <h3>Created: {moment(patient.createdAt).format('DD/MM/YYYY')}</h3>
          </DetailsContainer>
        </DataContainer>
        <ExpandIcon
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {getIcons(iconType)}
        </ExpandIcon>
        ;
      </MainInfoContainer>

      {isExpanded && (
        <ExpandedSection>
          <h3>
            Website:{' '}
            <a href={patient.website} target="_blank" rel="noopener noreferrer">
              {patient.website}
            </a>
          </h3>
          <p>{patient.description}</p>
        </ExpandedSection>
      )}
    </Container>
  );
};
