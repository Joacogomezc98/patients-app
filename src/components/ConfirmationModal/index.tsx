import React from 'react';

import { Actionbutton } from '../Button';
import {
  ButtonsSection,
  CloseButton,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from '../PatientModal/style';
import { getIcons } from '../../utils/utils';

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Confirm Action</h2>
          <CloseButton onClick={onCancel}>{getIcons('close')}</CloseButton>
        </ModalHeader>
        <ModalBody>
          <h3>{message}</h3>
          <ButtonsSection editMode={false}>
            <Actionbutton
              text="Cancel"
              textColor="black"
              backgroundColor="transparent"
              onClick={onCancel}
            />
            <Actionbutton
              text="Confirm"
              textColor="white"
              backgroundColor="#4d90fe"
              onClick={onConfirm}
            />
          </ButtonsSection>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};
