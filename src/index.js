import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
const wrappedApp =
(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(wrappedApp, document.getElementById('root'));