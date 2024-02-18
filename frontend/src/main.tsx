import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from './styles/StylesProvider';
import { SocketProvider } from './features/socket/context.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SocketProvider>
      <BrowserRouter>
        <StylesProvider>
          <App />
        </StylesProvider>
      </BrowserRouter>
    </SocketProvider>
  </React.StrictMode>,
);
