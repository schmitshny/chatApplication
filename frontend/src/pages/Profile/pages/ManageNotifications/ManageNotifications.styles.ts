import styled from 'styled-components';

export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  letter-spacing: 0.308px;
  line-height: 130%;
  justify-content: center;
  margin-top: -25px;
`;

export const SectionDescription = styled.p`
  font-size: 13px;
  line-height: 130%;
  letter-spacing: 0.308px;
  text-align: center;
`;

export const TimeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-top: 20px;
`;

export const TimeOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const TimeLabel = styled.span`
  margin-left: 10px;
  font-size: 13px;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ $isActive }) => ($isActive ? '#007bff' : 'transparent')};
`;
