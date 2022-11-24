import { createContext } from 'react';
import ModalProxy from './ModalProxy';

export const ModalContext = createContext<ModalProxy | null>(null);
