import type { AppProps } from 'next/app';
import { ModalProvider } from '../modules/modal';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ModalProvider>
			<Component {...pageProps} />
		</ModalProvider>
	);
}
