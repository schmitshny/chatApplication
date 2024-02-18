import styled, { css } from 'styled-components';
import { AvatarSize } from './Avatar';

export type AvatarShape = 'circle' | 'rounded';

interface StyledAvatarProps {
  size: AvatarSize;
  shape?: AvatarShape;
}

interface StatusDotProps {
  $isOnline: boolean;
}

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAvatar = styled.img<StyledAvatarProps>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '16px')};
  border: 1px solid silver;
  align-self: center;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          width: 38px;
          height: 38px;
        `;
      case 'medium':
        return css`
          width: 50px;
          height: 50px;
        `;
      case 'large':
        return css`
          width: 70px;
          height: 70px;
        `;
      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }}
`;

export const StatusDot = styled.span<StatusDotProps>`
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'gray')};
`;
