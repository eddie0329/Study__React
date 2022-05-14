import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const content = (
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);

// @ts-ignore
console.log(process.env);

const root = ReactDOM.hydrateRoot(
	document.getElementById('root') as HTMLElement,
  content,
);

root.render(content);
