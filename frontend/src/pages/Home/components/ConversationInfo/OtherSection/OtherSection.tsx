import { Icon } from '../../../../../components';
import {
  OtherOption,
  OtherSectionContainer,
  OtherSectionHeader,
  OptionWrapper,
  OptionDescription,
} from './OtherSection.styles';

export const OtherSection = () => {
  return (
    <OtherSectionContainer>
      <OtherSectionHeader>Other files</OtherSectionHeader>
      <OtherOption>
        <OptionWrapper>
          <Icon name="documents" />
          <OptionDescription>Documents</OptionDescription>
        </OptionWrapper>
        <Icon name="nextArrow" />
      </OtherOption>
      <OtherOption>
        <OptionWrapper>
          <Icon name="channels" />
          <OptionDescription>Channels</OptionDescription>
        </OptionWrapper>
        <Icon name="nextArrow" />
      </OtherOption>
      <OtherOption>
        <OptionWrapper>
          <Icon name="groups" />
          <OptionDescription>Groups</OptionDescription>
        </OptionWrapper>
        <Icon name="nextArrow" />
      </OtherOption>
    </OtherSectionContainer>
  );
};
