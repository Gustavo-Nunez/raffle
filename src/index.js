import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import './index.css';
import Routes from './routes';
import ioConnectImg from './images/ioconnectservices.png';
import mulesoftImg from './images/mulesoft-logo.png';

let store = createStore( reducers, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store} >
    <div style={{ textAlign: 'center'}}>
        <img src={ioConnectImg} className="App-logo" alt="logo" />
        <img src={mulesoftImg} className="App-logo" alt="logo" />
        <Routes />
        <img src={ioConnectImg} className="App-logo" alt="logo" />
        <img src={mulesoftImg} className="App-logo" alt="logo" />
    </div>
</Provider>
, document.getElementById('root'));
