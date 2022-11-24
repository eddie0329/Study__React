import React from 'react';
import { Reject, Resolve } from '../modules/modal';

interface ModalProps {
	resolve: Resolve;
	reject: Reject;
}

export default function Modal({ resolve, reject }: ModalProps) {
	const handleResovle = () => {
		resolve('hello resolve');
	};
	const handleReject = () => {
		reject('hello reject');
	};
	return (
		<div>
			<h1>hello modal</h1>
			<button onClick={handleResovle}>Resolve</button>
			<button onClick={handleReject}>Reject</button>
		</div>
	);
}
