import { useContext } from 'react';
import { ToastContext } from './ToastContext';
import ToastProxy from './ToastProxy';

export const useToast = () => {
	return useContext(ToastContext) as ToastProxy;
};
