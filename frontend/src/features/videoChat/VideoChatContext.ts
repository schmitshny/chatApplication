import { createContext } from 'react';
import { ContextProps } from './types';

export const VideoChatContext = createContext<ContextProps | null>(null);
