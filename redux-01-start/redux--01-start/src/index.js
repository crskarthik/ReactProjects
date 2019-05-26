import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'


const rootReducer = combineReducers({
    ctr:counterReducer,
    resu:resultReducer
})

const logger  = store =>{
    return next=>{
        return action=>{
            console.log('[Middleware] action: ',action)
            const res = next(action)
            console.log('[Middleware] next state: ',store.getState())
            return res
        }

    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
