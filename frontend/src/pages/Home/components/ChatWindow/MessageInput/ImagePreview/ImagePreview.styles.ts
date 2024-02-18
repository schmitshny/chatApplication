import styled from 'styled-components';

export const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: -9px;
  right: -12px;
  cursor: pointer;
`;
