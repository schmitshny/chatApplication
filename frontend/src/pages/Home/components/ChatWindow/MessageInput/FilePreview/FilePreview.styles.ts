import styled from 'styled-components';

export const FilePreviewContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px;
  border-radius: 10px;
  background-color: #343434;
`;

export const FileInfo = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const FileSize = styled.span`
  font-size: 0.6rem;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: -9px;
  right: -12px;
  cursor: pointer;
`;
