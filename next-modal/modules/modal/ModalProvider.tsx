import React, {
	PropsWithChildren,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { ModalContext } from './ModalContext';
import ModalContainer from './ModalContainer';
import ModalProxy from './ModalProxy';
import { useMount } from '../../hooks';

export default function ModalProvider({ children }: PropsWithChildren) {
	const flagState = useState(1);
	const [modalProxy] = useState(() => new ModalProxy(flagState));
	const [mount] = useMount();

	useLayoutEffect(() => {
		if (!mount) return; /* guard */
		modalProxy.mount();
		return modalProxy.unmount();
	}, [mount]);

	return (
		<ModalContext.Provider value={modalProxy}>
			{children}
			<ModalContainer />
		</ModalContext.Provider>
	);
}
