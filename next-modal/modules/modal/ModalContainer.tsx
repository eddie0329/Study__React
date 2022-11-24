import React from 'react';
import * as ReactDOM from 'react-dom';
import { useMount } from '../../hooks';
import { useModal } from '.';

export default function ModalContainer() {
	const modal = useModal();
	const [mount] = useMount();
	if (!mount) return null; /* guard */
	if (!document.getElementById('modal')) {
		const modalDom = document.createElement('div');
		modalDom.id = 'modal';
		document.body.append(modalDom);
	}
	return ReactDOM.createPortal(
		<>
			{modal.modalInfos.map(({ Component, resolve, reject, key, props }) => (
				<Component key={key} resolve={resolve} reject={reject} {...props} />
			))}
		</>,
		document.getElementById('modal') as HTMLElement
	);
}
