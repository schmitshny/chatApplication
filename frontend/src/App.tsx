import { Router } from './Router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './features/auth/context/AuthProvider';
import { ResponseInterceptor } from './api/ResponseInterceptor';
import { ConversationProvider } from './features/chat/context/ConversationProvider';
import { AlertProvider } from './components/Alert/AlertProvider';
import { AlertContainer } from './components/Alert/AlertContainer';
import { VideoChatContexProvider } from './features/videoChat/VideoChatProvider';
import { IncomingCallNotification } from './pages/VideoChat/components/Notifications';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AlertProvider>
          <ConversationProvider>
            <VideoChatContexProvider>
              <IncomingCallNotification />
              <ResponseInterceptor />
              <Router />
              <AlertContainer />
            </VideoChatContexProvider>
          </ConversationProvider>
        </AlertProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
