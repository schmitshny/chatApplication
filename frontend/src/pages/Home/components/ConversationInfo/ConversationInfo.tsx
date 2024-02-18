import { User } from '../../../../features/auth/types';
import { Icon } from '../../../../components';

import { SectionHeader } from '../SectionHeader';
import { Stories } from './Stories';
import { ProfileInfo } from './ProfileInfo';
import { OtherSection } from './OtherSection';
import { SectionHeaderTitle } from '../SectionHeader/SectionHeader.styles';
import { ConversationInfoContainer, InfoSection } from './ConversationInfo.styles';

interface ConversationInfoProps {
  selectedUser: User;
}

export const ConversationInfo = ({ selectedUser }: ConversationInfoProps) => {
  return (
    <ConversationInfoContainer>
      <SectionHeader
        leftSection={<SectionHeaderTitle>Activity</SectionHeaderTitle>}
        rightSection={<Icon name="activitySettings" />}
      />
      <InfoSection>
        <Stories />
        <ProfileInfo user={selectedUser} />
        <OtherSection />
      </InfoSection>
    </ConversationInfoContainer>
  );
};
