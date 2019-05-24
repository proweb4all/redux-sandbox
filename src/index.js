import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
