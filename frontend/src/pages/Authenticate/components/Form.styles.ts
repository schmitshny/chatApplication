import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const StyledHeader = styled.h1`
  font-size: 27px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #222;
  display: block;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;
