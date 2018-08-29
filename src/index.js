import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import Rootdeducers from './reducers/index'
import {increment,decrement} from './actions/index'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(Rootdeducers);


    ReactDOM.render(
        <Provider>
             <App store={store}/>
        </Provider>,
     document.getElementById('root'));



registerServiceWorker();
