import { User } from '../../../../features/auth/types';
import { SearchedUser } from '../SearchedUser';
import { ListContainer } from './SearchedUsersList.styles';

interface SearchUsersListProps {
  usersList: User[];
}

export const SearchedUsersList = ({ usersList }: SearchUsersListProps) => {
  return (
    <ListContainer>
      {usersList.length > 0 ? (
        usersList.map((user) => <SearchedUser key={user.id} searchedUser={user} />)
      ) : (
        <p>No users found</p>
      )}
    </ListContainer>
  );
};
