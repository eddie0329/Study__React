import React from 'react';
import styled from '@emotion/styled';
import * as ReactDOM from 'react-dom';
import { useMount } from '../../hooks';
import { useModal } from '.';

const Styled = {
	modalContainer: styled.div<{ show: boolean }>`
		display: ${({ show }) => (show ? 'flex' : 'none')};
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100vw;
		height: 100vh;
	`,
};

export default function ModalContainer() {
	const modal = useModal();
	const { mount } = useMount();
	if (!mount) return null; /* guard */
	if (!document.getElementById('modal')) {
		const modalDom = document.createElement('div');
		modalDom.id = 'modal';
		document.body.append(modalDom);
	}
	return ReactDOM.createPortal(
		<Styled.modalContainer show={Boolean(modal.modalInfos.length)}>
			{modal.modalInfos?.map(({ Component, resolve, reject, key, props }) => (
				<Component key={key} resolve={resolve} reject={reject} {...props} />
			))}
		</Styled.modalContainer>,
		document.getElementById('modal') as HTMLElement
	);
}
