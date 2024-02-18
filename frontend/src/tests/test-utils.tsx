import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '../features/theme';
import { AuthProvider } from '../features/auth/context/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

interface CustomRenderOptions {
  wrapper?: React.ComponentType;
}

export const render = (ui: ReactElement, client?: QueryClient, options?: CustomRenderOptions) => {
  const queryClient = client ?? new QueryClient();
  const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};
