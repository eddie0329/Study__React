import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<App />
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
