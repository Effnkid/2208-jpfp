import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
