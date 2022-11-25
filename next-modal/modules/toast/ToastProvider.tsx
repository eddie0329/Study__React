import React, { PropsWithChildren, useState } from 'react';
import { useMount } from '../../hooks';
import ToastContainer from './ToastContainer';
import { ToastContext } from './ToastContext';
import ToastProxy from './ToastProxy';

export default function ToastProvider({ children }: PropsWithChildren) {
	const flagState = useState(1);
	const [toastProxy] = useState(() => new ToastProxy(flagState));
	const { useMountEffect } = useMount();

	useMountEffect(() => {
		toastProxy.mount();
		return toastProxy.unmount();
	});

	return (
		<ToastContext.Provider value={toastProxy}>
			{children}
			<ToastContainer />
		</ToastContext.Provider>
	);
}
