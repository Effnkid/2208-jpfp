import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = configureStore();
root.render(
	<BrowserRouter>
		<>
			<App />
		</>
	</BrowserRouter>
);
