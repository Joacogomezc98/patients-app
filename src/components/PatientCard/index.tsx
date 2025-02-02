import React, { useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  Container,
  DataContainer,
  DateInfo,
  DetailsContainer,
  ExpandedSection,
  ExpandIcon,
  MainInfoContainer,
  PatientInfo,
  ProfileImage,
} from './stlye';
import moment from 'moment';
import { getIcons, getInitials } from '../../utils/utils';
import { Patient } from '../../redux/patients/patients.types';
import { useDispatch } from 'react-redux';
import { selectPatient } from '../../redux/patients/patients.slice';

interface Props {
  patient: Patient;
}

export const PatientCard: React.FC<Props> = ({ patient }) => {
  //Handle error for missing img or not available ones
  const [imgError, setImgError] = useState<boolean>(false);

  const [userInitials, setUserInitials] = useState<string>('');

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [arrowHover, setArrowHover] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setUserInitials(getInitials(patient.name));
  }, [patient]);

  //Functions
  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };
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
    <Container
      isExpanded={isExpanded}
      onClick={() => dispatch(selectPatient(patient))}
    >
      <MainInfoContainer>
        <PatientInfo>
          {imgError ? (
            <ProfileImage initials={userInitials}>{userInitials}</ProfileImage>
          ) : (
            <Avatar src={patient.avatar} onError={() => setImgError(true)} />
          )}
          <DataContainer>
            <h2>{patient.name}</h2>
            <DetailsContainer>
              <h3>Patient ID: #{patient.id}</h3>
            </DetailsContainer>
          </DataContainer>
          <ExpandIcon
            onClick={handleIconClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {getIcons(iconType)}
          </ExpandIcon>
        </PatientInfo>
        <DateInfo>
          {getIcons('calendar')}
          <h3>Created At: {moment(patient.createdAt).format('DD/MM/YYYY')}</h3>
        </DateInfo>
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
