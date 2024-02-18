import React from 'react';
import { ModalContainer, ModalOverlay } from './Modal.styles';

interface ModalProps {
  show: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal = ({ show, onClose, children }: ModalProps) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>{children}</ModalContainer>
    </ModalOverlay>
  );
};
