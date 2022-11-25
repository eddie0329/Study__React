import React from 'react';
import { useModal } from '../modules/modal';
import Modal from '../components/Modal';
import { useToast } from '../modules/toast';

function Divider() {
	return (
		<>
			<br />
			<hr />
		</>
	);
}

export default function Home() {
	const modal = useModal();
	const toast = useToast();
	const handleClick = async () => {
		const res = await modal.push('hello', Modal);
		console.log('hello', res);
	};
	return (
		<div>
			<h1>modal test</h1>
			<button onClick={handleClick}>HELLO</button>
			<Divider />
			<h1>toast test</h1>
			<button onClick={() => toast.success('success')}>success</button>
			<button onClick={() => toast.fail('fail')}>fail</button>
		</div>
	);
}
