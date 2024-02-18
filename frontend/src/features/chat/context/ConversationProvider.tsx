import { ReactNode, useState } from 'react';
import { ConversationContext } from '.';
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '../../../utils/localStorage';
import { muteEndTimeSchema } from '../types';

interface ConversationProviderProps {
  children: ReactNode;
}

export const ConversationProvider = ({ children }: ConversationProviderProps) => {
  const [activeConversationId, setActiveConversationId] = useState<number | undefined>(undefined);
  const [muteEndTime, setMuteEndTime] = useState(() => {
    const storedMuteEndTime = getFromLocalStorage('muteEndTime');
    const parsedMuteEndTime = muteEndTimeSchema.safeParse(storedMuteEndTime);

    return parsedMuteEndTime.success ? parsedMuteEndTime.data : null;
  });

  const muteNotifications = (minutes: number) => {
    const muteEnd = minutes === Infinity ? Infinity : new Date().getTime() + minutes * 60000;
    setMuteEndTime(muteEnd);
    setToLocalStorage('muteEndTime', muteEnd);
  };

  const isMuted = Boolean(muteEndTime === Infinity || (muteEndTime && new Date().getTime() <= muteEndTime));

  const unmuteNotifications = () => {
    removeFromLocalStorage('muteEndTime');
    setMuteEndTime(null);
  };

  return (
    <ConversationContext.Provider
      value={{ activeConversationId, setActiveConversationId, muteNotifications, unmuteNotifications, isMuted }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
