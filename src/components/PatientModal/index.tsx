import React, { useEffect, useState } from 'react';
import {
  ButtonsSection,
  CloseButton,
  Form,
  FormRow,
  Input,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectActivePatient } from '../../redux/patients/selectors';
import {
  clearSelectedPatient,
  deletePatient,
  editPatient,
} from '../../redux/patients/patients.slice';
import { Patient } from '../../redux/patients/patients.types';
import { getIcons, getInitials } from '../../utils/utils';
import {
  Avatar,
  DataContainer,
  DetailsContainer,
  ExpandedSection,
  MainInfoContainer,
  ProfileImage,
} from '../PatientCard/stlye';
import moment from 'moment';
import { Actionbutton } from '../Button';

export const PatientModal: React.FC = () => {
  const patient = useSelector(selectActivePatient);

  const [editMode, setEditMode] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null);
  const [userInitials, setUserInitials] = useState<string>('');
  const [imgError, setImgError] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (patient) {
      setEditedPatient(patient);
      setUserInitials(getInitials(patient.name));
    }
  }, [patient]);

  useEffect(() => {
    if (editMode && editedPatient) {
      setUserInitials(getInitials(editedPatient.name));
    }
  }, [editMode, editedPatient]);

  const handleClose = () => {
    dispatch(clearSelectedPatient());
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setEditedPatient((prev) => {
      if (!prev) return null; // Ensure prev is not null

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedPatient(patient);
  };

  const handleSave = () => {
    dispatch(editPatient(editedPatient!));
    setEditMode(false);
  };
  const handleDelete = () => {
    dispatch(deletePatient(patient!.id));
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Patient Profile</h2>
          <CloseButton onClick={handleClose}>{getIcons('close')}</CloseButton>
        </ModalHeader>
        <ModalBody>
          <MainInfoContainer>
            {imgError ? (
              <ProfileImage initials={userInitials}>
                {userInitials}
              </ProfileImage>
            ) : (
              <Avatar
                src={editedPatient?.avatar}
                onError={() => setImgError(true)}
              />
            )}
            <DataContainer>
              <h2>{editedPatient?.name}</h2>
              <DetailsContainer>
                <h3>#{patient?.id}</h3>
                <h3>
                  Created: {moment(patient?.createdAt).format('DD/MM/YYYY')}
                </h3>
              </DetailsContainer>
            </DataContainer>
          </MainInfoContainer>

          {editMode ? (
            <Form>
              <FormRow>
                <label htmlFor="name">Name:</label>
                <Input
                  id="name"
                  name="name"
                  value={editedPatient?.name || ''}
                  onChange={handleInputChange}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="name">Avatar URL:</label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={editedPatient?.avatar || ''}
                  onChange={handleInputChange}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="website">Website:</label>
                <Input
                  id="website"
                  name="website"
                  value={editedPatient?.website || ''}
                  onChange={handleInputChange}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="description">Description:</label>
                <Textarea
                  id="description"
                  name="description"
                  value={editedPatient?.description || ''}
                  onChange={handleInputChange}
                />
              </FormRow>
              <ButtonsSection editMode={editMode}>
                <Actionbutton
                  text="Delete patient"
                  textColor="#f00"
                  backgroundColor="#ffebeb"
                  onClick={handleDelete}
                />
                <div>
                  <Actionbutton
                    text="Cancel"
                    textColor="black"
                    backgroundColor="transparent"
                    onClick={handleCancel}
                  />
                  <Actionbutton
                    text="Save"
                    textColor="white"
                    backgroundColor="#6dbc70"
                    onClick={handleSave}
                  />
                </div>
              </ButtonsSection>
            </Form>
          ) : (
            <ExpandedSection>
              <h3>
                Website:{' '}
                <a
                  href={editedPatient?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {editedPatient?.website}
                </a>
              </h3>
              <p>{editedPatient?.description}</p>
            </ExpandedSection>
          )}

          {!editMode && (
            <ButtonsSection editMode={editMode}>
              <Actionbutton
                text="Edit"
                textColor="white"
                backgroundColor="black"
                onClick={handleEdit}
              />
            </ButtonsSection>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};
