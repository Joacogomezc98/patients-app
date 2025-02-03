import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPatient } from '../../redux/patients/patients.slice';
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
} from '../PatientModal/style';
import { getIcons } from '../../utils/utils';
import { NewPatient } from '../../redux/patients/patients.types';
import { usePatientValidation } from '../../hooks/usePatientValidation';
import { ConfirmationModal } from '../ConfirmationModal';
import { Actionbutton } from '../Button';
import { Notification, NotificationType } from '../Notification';

interface AddPatientFormProps {
  onClose: () => void;
}

export const AddPatientForm: React.FC<AddPatientFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newPatient, setNewPatient] = useState<NewPatient>({
    name: '',
    description: '',
  });

  //Validations hook
  const { errors, validate } = usePatientValidation();

  //Confimation state
  const [confirmAction, setConfirmAction] = useState<boolean>(false);

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
    onClose();
  };

  //Data change handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNewPatient((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCancel = () => {
    onClose();
  };
  const handleSave = () => {
    if (!validate(newPatient)) return; // Stop if validation fails
    setConfirmAction(true);
  };

  const confirmActionHandler = () => {
    if (confirmAction) {
      dispatch(addPatient(newPatient));
      // Show notification
      setNotification({
        message: 'Patient added successfully!',
        open: true,
        type: NotificationType.SUCCESS,
      });
    }
    setConfirmAction(false); // Close modal after action
  };

  return (
    <>
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader>
            <h2>New patient form</h2>
            <CloseButton onClick={onClose}>{getIcons('close')}</CloseButton>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormRow>
                <label htmlFor="name">Name:</label>
                <Input
                  id="name"
                  name="name"
                  value={newPatient?.name || ''}
                  onChange={handleInputChange}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </FormRow>
              <FormRow>
                <label htmlFor="name">Avatar URL:</label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={newPatient?.avatar || ''}
                  onChange={handleInputChange}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="website">Website:</label>
                <Input
                  id="website"
                  name="website"
                  value={newPatient?.website || ''}
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
                  value={newPatient?.description || ''}
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <p style={{ color: 'red' }}>{errors.description}</p>
                )}
              </FormRow>
              <ButtonsSection editMode={false}>
                <Actionbutton
                  text="Cancel"
                  textColor="black"
                  backgroundColor="transparent"
                  onClick={handleCancel}
                />
                <Actionbutton
                  text="Add"
                  textColor="white"
                  backgroundColor="#6dbc70"
                  onClick={handleSave}
                />
              </ButtonsSection>
            </Form>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
      {/* Show Confirmation Modal */}
      {confirmAction && (
        <ConfirmationModal
          message={'Are you sure you add this new patient?'}
          onConfirm={confirmActionHandler}
          onCancel={() => setConfirmAction(false)}
        />
      )}
      {/* Show Notification */}
      <Notification
        type={notification.type}
        message={notification.message}
        open={notification.open}
        onClose={handleCloseNotification}
      />
    </>
  );
};
