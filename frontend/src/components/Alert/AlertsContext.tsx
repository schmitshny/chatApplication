import { createContext } from 'react';
import { Alert, AlertType } from './types';

interface AlertContextType {
  alerts: Alert[];
  addAlert: (message: string, type: AlertType) => void;
  removeAlert: (id: string) => void;
}

export const AlertContext = createContext<AlertContextType | null>(null);
