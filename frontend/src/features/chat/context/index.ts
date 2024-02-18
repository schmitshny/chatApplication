import { createContext } from 'react';

interface ConversationContextType {
  activeConversationId?: number;
  setActiveConversationId: (id: number | undefined) => void;
  isMuted: boolean;
  muteNotifications: (minutes: number) => void;
  unmuteNotifications: () => void;
}

export const ConversationContext = createContext<ConversationContextType | undefined>(undefined);
