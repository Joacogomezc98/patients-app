import React, { useEffect, useState } from 'react';
import {
  ButtonsSection,
  CloseButton,
  Form,
  FormRow,
  Input,
  MainInfoContainer,
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
  ProfileImage,
} from '../PatientCard/stlye';
import moment from 'moment';
import { Actionbutton } from '../Button';
import { ConfirmationModal } from '../ConfirmationModal';
import { usePatientValidation } from '../../hooks/usePatientValidation';
import { NotificationType, Notification } from '../Notification';

export const PatientModal: React.FC = () => {
  const patient = useSelector(selectActivePatient);

  const [editMode, setEditMode] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null);
  const [userInitials, setUserInitials] = useState<string>('');
  const [imgError, setImgError] = useState<boolean>(false);
  const [confirmAction, setConfirmAction] = useState<'save' | 'delete' | null>(
    null,
  );

  //Nofitication handler
  const [notification, setNotification] = useState<{
    message: string;
    open: boolean;
    type?: NotificationType;
  }>({
    message: '',
    open: false,
  });

  const handleCloseNotification = () => {
    setNotification({ message: '', open: false });
  };

  //Validations
  const { errors, validate } = usePatientValidation();

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
    if (!validate(editedPatient)) return; // Stop if validation fails
    setConfirmAction('save');
  };

  const handleDelete = () => {
    setConfirmAction('delete');
  };

  const confirmActionHandler = () => {
    if (confirmAction === 'save' && editedPatient) {
      dispatch(editPatient(editedPatient));
      // Show notification
      setNotification({
        message: 'Patient edited successfully!',
        open: true,
        type: NotificationType.SUCCESS,
      });
      setEditMode(false);
    } else if (confirmAction === 'delete' && patient) {
      dispatch(deletePatient(patient.id));
    }
    setConfirmAction(null); // Close modal after action
  };

  return (
    <>
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
                  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
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
                  {errors.website && (
                    <p style={{ color: 'red' }}>{errors.website}</p>
                  )}
                </FormRow>
                <FormRow>
                  <label htmlFor="description">Description:</label>
                  <Textarea
                    id="description"
                    name="description"
                    value={editedPatient?.description || ''}
                    onChange={handleInputChange}
                  />
                  {errors.description && (
                    <p style={{ color: 'red' }}>{errors.description}</p>
                  )}
                </FormRow>
                <ButtonsSection editMode={editMode}>
                  <Actionbutton
                    text="Delete patient"
                    icon={getIcons('delete')}
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
                      text="Save changes"
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
      {/* Show Confirmation Modal for Save or Delete */}
      {confirmAction && (
        <ConfirmationModal
          message={
            confirmAction === 'save'
              ? 'Are you sure you want to save these changes?'
              : 'Are you sure you want to delete this patient?'
          }
          onConfirm={confirmActionHandler}
          onCancel={() => setConfirmAction(null)}
        />
      )}
      <Notification
        type={notification.type}
        message={notification.message}
        open={notification.open}
        onClose={handleCloseNotification}
      />
    </>
  );
};
