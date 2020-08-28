import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { I18nextProvider } from "react-i18next";
import * as serviceWorker from './serviceWorker';

import i18n from "./locale/i18next";

import { userReducer as reducer } from './reducers/userReducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<App />
		</I18nextProvider>
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();
