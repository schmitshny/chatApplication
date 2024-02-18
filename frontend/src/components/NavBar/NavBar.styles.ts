import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 20px;
  padding-top: 100px;
  width: 60px;
`;

export const NavBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 40px;
`;

export const Logo = styled.div`
  font-size: 1.2em;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: 1em;
  margin-left: 10px;
`;
