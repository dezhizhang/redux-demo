import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import Rootdeducers from './reducers/index'
import {increment,decrement} from './actions/index'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(Rootdeducers,{},applyMiddleware(logger,thunk));


    ReactDOM.render(
        <Provider store={store}>
             <App />
        </Provider>,
     document.getElementById('root'));



registerServiceWorker();
