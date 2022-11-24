import { useContext } from 'react';
import ModalProxy from './ModalProxy';
import { ModalContext } from './ModalContext';

export const useModal = () => {
	return useContext(ModalContext) as ModalProxy;
};
