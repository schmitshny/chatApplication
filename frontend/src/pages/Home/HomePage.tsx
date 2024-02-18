import { useState } from 'react';
import { useAuthContext } from '../../features/auth/context/useAuthContext';
import { useOnlineUsers } from '../../features/chat/useOnlineUsers';
import { NoChatSelected } from './components/NoChatSelected';
import { UsersList } from './components/UsersList';
import { ChatWindow } from './components/ChatWindow';
import { NavBar } from '../../components';
import { User } from '../../features/auth/types';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  const { user } = useAuthContext();
  const { onlineUsers } = useOnlineUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <HomePageContainer>
      <NavBar />
      <UsersList
        onUserSelect={setSelectedUser}
        selectedUserId={selectedUser?.id}
        onlineUsers={onlineUsers}
        userId={user?.id}
      />
      {selectedUser && user ? (
        <>
          <ChatWindow currentUser={user} selectedUser={selectedUser} />
        </>
      ) : (
        <NoChatSelected />
      )}
    </HomePageContainer>
  );
};

export default HomePage;
