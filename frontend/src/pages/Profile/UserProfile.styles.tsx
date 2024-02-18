import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export const UserAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 50px;
  height: 50px;
`;

export const CameraIcon = styled(FaCamera)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  padding: 5px;
  transition: 0.8s;
  opacity: 0.6;
  ${UserAvatarWrapper}:hover & {
    display: inline-flex;
  }
`;
