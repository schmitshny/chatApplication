import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const createQueryClientWrapper = () => {
  const queryClient = new QueryClient();

  // eslint-disable-next-line react/display-name
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
