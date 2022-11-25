import React, { PropsWithChildren, useState } from 'react';
import { ModalContext } from './ModalContext';
import ModalContainer from './ModalContainer';
import ModalProxy from './ModalProxy';
import { useMount } from '../../hooks';
import { useRouter } from 'next/router';

export default function ModalProvider({ children }: PropsWithChildren) {
	const router = useRouter();
	const flagState = useState(1);
	const [modalProxy] = useState(() => new ModalProxy(flagState, router));
	const { useMountEffect } = useMount();

	useMountEffect(() => {
		modalProxy.mount();
		return modalProxy.unmount();
	});

	return (
		<ModalContext.Provider value={modalProxy}>
			{children}
			<ModalContainer />
		</ModalContext.Provider>
	);
}
