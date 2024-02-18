import { SearchBarContainer, SearchIcon, SearchInput } from './SearchBar.styles';

interface SearchBarProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onSubmit?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value = '', onChange, placeholder = 'Search...', onSubmit }: SearchBarProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput placeholder={placeholder} value={value} onChange={onChange} onKeyDown={handleKeyDown} />
      <SearchIcon onClick={handleKeyDown} />
    </SearchBarContainer>
  );
};
