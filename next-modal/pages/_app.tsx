import type { AppProps } from 'next/app';
import { ModalProvider } from '../modules/modal';
import { ToastProvider } from '../modules/toast';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ToastProvider>
			<ModalProvider>
				<Component {...pageProps} />
			</ModalProvider>
		</ToastProvider>
	);
}
