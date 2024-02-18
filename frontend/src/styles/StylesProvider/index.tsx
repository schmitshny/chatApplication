import { ThemeProvider } from '../../features/theme/ThemeProvider';
import { GlobalStyles } from '../GlobalStyles';

interface StylesProviderProps {
  children: React.ReactNode;
}

export const StylesProvider = ({ children }: StylesProviderProps) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
