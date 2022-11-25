import React from 'react';
import styled from '@emotion/styled';
import { ToastType } from './ToastProxy';

const ToastBasic = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80vw;
	height: 40px;
	cursor: pointer;
`;
const ToastSuccess = styled(ToastBasic)`
	background: green;
	color: black;
`;
const ToastFail = styled(ToastBasic)`
	background: red;
	color: white;
`;

interface ToastProps {
	type: ToastType;
	msg: string;
	close: () => void;
}

export default function Toast({ msg, type, close }: ToastProps) {
	switch (type) {
		case ToastType.SUCCESS:
			return <ToastSuccess onClick={close}>{msg}</ToastSuccess>;
		case ToastType.FAIL:
			return <ToastFail onClick={close}>{msg}</ToastFail>;
		default:
			return <ToastSuccess onClick={close}>{msg}</ToastSuccess>;
	}
}
