import { User } from '../../../../features/auth/types';
import { useAuthContext } from '../../../../features/auth/context/useAuthContext';
import { Avatar, Icon } from '../../../../components';
import { UserContainer, UserInfo, UserName } from './SearchedUser.styles';
import { useMutation } from 'react-query';
import { getConversation } from '../../../../features/chat/api';
import { useNavigate } from 'react-router-dom';

interface SearchedUserProps {
  searchedUser: User;
}

export const SearchedUser = ({ searchedUser }: SearchedUserProps) => {
  const navigate = useNavigate();
  const { name, avatarImg, lastName, id: searchUserId } = searchedUser;
  const { user } = useAuthContext();
  const { mutate: createConversation } = useMutation(
    () => {
      if (user) {
        return getConversation(user.id, searchUserId);
      }
      throw new Error('User not found');
    },
    {
      onSuccess: () => {
        navigate('/');
      },
    },
  );

  const handleAddContact = () => {
    createConversation();
  };

  return (
    <UserContainer>
      <UserInfo>
        <Avatar avatarUrl={avatarImg} />
        <UserName>{`${name} ${lastName}`}</UserName>
      </UserInfo>
      <Icon name="addContact" onClick={handleAddContact} />
    </UserContainer>
  );
};
