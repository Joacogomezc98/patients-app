import React, { useEffect } from 'react';
import { Container } from './style';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
}

interface NotificationProps {
  message: string;
  open: boolean;
  onClose: () => void;
  type?: NotificationType;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  open,
  onClose,
  type,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Hide notification after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Container type={type}>
      <span>{message}</span>
    </Container>
  );
};
