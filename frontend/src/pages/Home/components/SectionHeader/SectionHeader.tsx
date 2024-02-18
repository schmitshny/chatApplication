import { StyledSectionHeader } from './SectionHeader.styles';

interface SectionHeaderProps {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
}

export const SectionHeader = ({ leftSection, rightSection }: SectionHeaderProps) => {
  return (
    <StyledSectionHeader>
      <section>{leftSection}</section>
      <section>{rightSection}</section>
    </StyledSectionHeader>
  );
};
