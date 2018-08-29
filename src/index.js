import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers/counter'
import {increment,decrement} from './actions/index'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(counter);

const render=()=>{
    ReactDOM.render(<App 
        value={store.getState()}
        onDecrement={()=>store.dispatch(increment())}
        onIncrement={()=>store.dispatch(decrement())}/>, document.getElementById('root'));
}

render();
store.subscribe(render);



registerServiceWorker();
