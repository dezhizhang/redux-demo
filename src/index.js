import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers/counter'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(counter);

const render=()=>{
    ReactDOM.render(<App 
        value={store.getState()}
        onDecrement={()=>store.dispatch({type:"DECREMENT"})}
        onIncrement={()=>store.dispatch({type:'INCREMENT'})}/>, document.getElementById('root'));
}

render();
store.subscribe(render);



registerServiceWorker();
