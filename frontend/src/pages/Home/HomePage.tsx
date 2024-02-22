import { useState } from 'react';
import { useAuthContext } from '../../features/auth/context/useAuthContext';
import { NoChatSelected } from './components/NoChatSelected';
import { UsersList } from './components/UsersList';
import { ChatWindow } from './components/ChatWindow';
import { NavBar } from '../../components';
import { User } from '../../features/auth/types';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  const { user } = useAuthContext();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <HomePageContainer>
      <NavBar />
      {user?.id && <UsersList onUserSelect={setSelectedUser} selectedUserId={selectedUser?.id} userId={user?.id} />}
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
