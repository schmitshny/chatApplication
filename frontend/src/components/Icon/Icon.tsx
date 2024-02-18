import { AddContactIcon } from './icons/AddContactIcon';
import { ActivitySettingsIcon } from './icons/ActivitySettingsIcon';
import { AlertIcon } from './icons/AlertIcon';
import { AttachIcon } from './icons/AttachIcon';
import { CameraIcon } from './icons/CameraIcon';
import { ChatIcon } from './icons/ChatIcon';
import { ChannelsIcon } from './icons/ChannelsIcon';
import { DocumentsIcon } from './icons/DocumentsIcon';
import { GroupsIcon } from './icons/GroupsIcon';
import { FileIcon } from './icons/FileIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { MediaIcon } from './icons/MediaIcon';
import { MicrophoneIcon } from './icons/MicrophoneIcon';
import { NextArrowIcon } from './icons/NextArrowIcon';
import { NextIcon } from './icons/NextIcon';
import { NotificationIcon } from './icons/NotificationIcon';
import { PenIcon } from './icons/PenIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ProfileIcon } from './icons/ProfileIcon';
import { PlusIcon } from './icons/PlusIcon';
import { RejectIcon } from './icons/RejectIcon';
import { PrevIcon } from './icons/PrevIcon';
import { SendIcon } from './icons/SendIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { SmileIcon } from './icons/SmileIcon';
import { OptionsIcon } from './icons/OptionsIcon';
import { HoverText, IconWrapper } from './Icon.styles';
import { DeleteIcon } from './icons/DeleteIcon';
import { DarkModeIcon } from './icons/DarkModeIcon';
import { NotificationOutlineIcon } from './icons/NotificationOutlineIcon';
import { UserIcon } from './icons/UserIcon';
import { ImageIcon } from './icons/ImageIcon';
import { AcceptVideo } from './icons/AcceptVideoIcon';

const iconsMap = {
  acceptVideo: AcceptVideo,
  addContact: AddContactIcon,
  activitySettings: ActivitySettingsIcon,
  alert: AlertIcon,
  attach: AttachIcon,
  darkMode: DarkModeIcon,
  smile: SmileIcon,
  next: NextIcon,
  nextArrow: NextArrowIcon,
  notificationOutline: NotificationOutlineIcon,
  send: SendIcon,
  file: FileIcon,
  channels: ChannelsIcon,
  delete: DeleteIcon,
  documents: DocumentsIcon,
  groups: GroupsIcon,
  logout: LogoutIcon,
  image: ImageIcon,
  chat: ChatIcon,
  notification: NotificationIcon,
  profile: ProfileIcon,
  settings: SettingsIcon,
  media: MediaIcon,
  microphone: MicrophoneIcon,
  pen: PenIcon,
  prev: PrevIcon,
  reject: RejectIcon,
  camera: CameraIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  options: OptionsIcon,
  user: UserIcon,
};

interface IconProps {
  name: keyof typeof iconsMap;
  customColor?: string;
  hoverText?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

export const Icon = ({ name, hoverText, onClick, customColor, 'data-testid': testId }: IconProps) => {
  const SpecificIconComponent = iconsMap[name];
  return (
    <IconWrapper
      $hoverTint={hoverText ? '#fff' : undefined}
      onClick={onClick}
      $color={customColor}
      data-testid={testId}
    >
      <SpecificIconComponent />
      {hoverText && <HoverText>{hoverText}</HoverText>}
    </IconWrapper>
  );
};
