import styled, { keyframes } from 'styled-components';

export const StoryContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80vh;
  border-radius: 10px;
  overflow: hidden;
`;

export const StoryImage = styled.img`
  width: 500px;
  height: 100%;
  object-fit: cover;
`;

export const NavigationButton = styled.button`
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  &:disabled {
    visibility: hidden;
  }
`;

export const PreviousButton = styled(NavigationButton)`
  margin-right: 10px;
`;

export const NextButton = styled(NavigationButton)`
  margin-left: 10px;
  transform: translateY(-50%) rotate(180deg);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
`;

export const UserName = styled.span`
  font-size: 16px;
  color: white;
  margin-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const shrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

export const ProgressBar = styled.div<{ $duration: number }>`
  height: 5px;
  background-color: white;
  animation: ${shrink} ${({ $duration }) => $duration / 1000}s linear forwards;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
