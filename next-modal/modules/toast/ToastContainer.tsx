import React from 'react';
import { useToast } from '.';
import styled from '@emotion/styled';
import * as ReactDOM from 'react-dom';
import { useMount } from '../../hooks';
import Toast from './Toast';

const TOAST_ID = 'toast';

const Styled = {
	toastContainer: styled.div`
		position: fixed;
		bottom: 0;
	`,
};

export default function ToastContainer() {
	const toast = useToast();
	const { mount } = useMount();
	if (!mount) return null; /* guard */
	if (!document.getElementById(TOAST_ID)) {
		const modalDom = document.createElement('div');
		modalDom.id = TOAST_ID;
		document.body.append(modalDom);
	}
	return ReactDOM.createPortal(
		<Styled.toastContainer>
			{toast.toastInfos.map(({ id, type, close, msg }) => (
				<Toast key={id} type={type} close={close} msg={msg} />
			))}
		</Styled.toastContainer>,
		document.getElementById(TOAST_ID) as HTMLElement
	);
}
