import { Conversation } from 'domain/chat/model/Conversation';

export const sortConversationsByLastMessage = (
  conversations: Conversation[],
) => {
  return conversations.sort((a, b) => {
    const dateA = a.messages?.[0]?.createdAt || 0;
    const dateB = b.messages?.[0]?.createdAt || 0;
    return dateB - dateA;
  });
};

export const mapConversations = (
  conversations: Conversation[],
  userId: string,
) => {
  return conversations.map((conversation) => {
    const { user1, user2, id, messages } = conversation;
    const { content = '', createdAt = null } = messages?.[0] || {};

    const {
      id: interlocutorId,
      name,
      lastName,
      avatarImg,
    } = user1.id == userId ? user2 : user1;

    return {
      conversationId: id,
      lastMessage: {
        content: content,
        sentAt: createdAt,
      },
      interlocutor: {
        id: interlocutorId,
        name: name,
        lastName: lastName,
        avatarImg: avatarImg,
      },
    };
  });
};
