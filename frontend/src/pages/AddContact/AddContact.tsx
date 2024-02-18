import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce/useDebounce';
import { useSearchUsers } from '../../features/User/useSearchUsers';
import { NavBar, SearchBar, Spinner } from '../../components';
import { SearchedUsersList } from './components/SearchedUsersList';
import { PageContainer, SearchContactsCard } from './AddContact.styles';

const AddContact = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { data: usersList, isLoading } = useSearchUsers(debouncedValue);

  const updateDebouncedValue = useCallback((value: string) => {
    setDebouncedValue(value);
  }, []);

  const deboucedSearch = useDebounce(updateDebouncedValue, 500);

  useEffect(() => {
    deboucedSearch(searchValue);
  }, [searchValue, deboucedSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <PageContainer>
      <NavBar />
      <SearchContactsCard>
        <h2>Search contacts</h2>
        <SearchBar value={searchValue} onChange={handleSearchChange} />
        {isLoading && <Spinner size="large"></Spinner>}
        {usersList && <SearchedUsersList usersList={usersList} />}
      </SearchContactsCard>
    </PageContainer>
  );
};

export default AddContact;
