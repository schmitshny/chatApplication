export type AlertType = 'success' | 'error' | 'info';
export interface Alert {
  id: string;
  message: string;
  type: AlertType;
}
