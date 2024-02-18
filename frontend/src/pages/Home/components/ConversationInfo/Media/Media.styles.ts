import styled from 'styled-components';

export const MediaWrapper = styled.div`
  padding: 16px 0px;
`;

export const MediaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const MediaTitle = styled.h6`
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.264px;
  cursor: pointer;
`;

export const LoaderWrapper = styled.div`
  grid-column: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoImagesText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.264px;
  cursor: pointer;
`;

export const RotatableIconWrapper = styled.div<{ $isRotated: boolean }>`
  display: inline-flex;
  transform: ${({ $isRotated }) => ($isRotated ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

export const ImagesContainer = styled.div<{ $isExpanded: boolean }>`
  transition:
    max-height 0.3s ease-in-out,
    padding 0.3s ease-in-out;
  max-height: ${({ $isExpanded }) => ($isExpanded ? '200px' : '0')};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  overflow-y: auto;
  padding: ${({ $isExpanded }) => ($isExpanded ? '10px 0' : '0')};
`;

export const ConversationImage = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  max-width: 100px;
`;
