import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
);

render();
store.subscribe(render);