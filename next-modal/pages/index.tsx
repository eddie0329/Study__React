import { useModal } from '../modules/modal';
import Modal from '../components/Modal';

export default function Home() {
	const modal = useModal();
	modal.push('hello2', Modal);
	const handleClick = async () => {
		const res = await modal.push('hello', Modal);
		console.log('hello', res);
	};
	return (
		<div>
			<h1>hello world</h1>
			<button onClick={handleClick}>HELLO</button>
		</div>
	);
}
