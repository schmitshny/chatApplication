import styled from 'styled-components';

export const MessageInputContainer = styled.div`
  margin-top: auto;
  margin: 19px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: 100%;
  height: 52px;
  padding: 0px 10px;
`;

export const MessageInputField = styled.input`
  margin-right: 10px;
  height: 100%;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const SendIconWrapper = styled.div`
  margin-left: 20px;
`;

export const SendButton = styled.button`
  background-color: #007bff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 10px 0;
`;
