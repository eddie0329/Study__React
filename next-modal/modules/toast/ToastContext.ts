import { createContext } from 'react';
import ToastProxy from './ToastProxy';

export const ToastContext = createContext<ToastProxy | null>(null);
