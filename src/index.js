import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux'
import Reducers from './reducers';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

const store = createStore(Reducers,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
<Router>

<App />
</Router>

</Provider>
);
