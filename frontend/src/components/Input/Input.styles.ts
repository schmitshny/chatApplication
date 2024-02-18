import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  border: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 30px;
  font-size: 0.9rem;
  border: none;
  color: gray;
  outline: none;
  border-bottom: 1px solid #999;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.inputText};

  &:focus {
    border-bottom: 1px solid #007bff;
    color: ${({ theme }) => theme.colors.inputText};
  }
`;

export const IconLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-100%);
  margin-right: 10px;
  max-height: 12px;
  svg {
    height: 12px;
  }
`;

export const InputError = styled.div`
  color: red;
  font-size: 0.8rem;
  padding: 0.3rem 0 0 0.1rem;
`;
