import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Composant
import App from './App';

// Redux

import { Provider } from 'react-redux';
import { configureStore, combineReducers, MiddlewareArray, compose } from '@reduxjs/toolkit';
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';

const reducer = combineReducers({

  minion:minionsReducer,

  save:saveReducer

});

// Création du Middleware

const middleWare = store => {
  return next => {
    return action => {
      console.log(store.getState().minion.minions);
      console.log(action.type);

      return next(action);
    };
  };
};

// Action > Middleware > Reducer

const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWare),
  devTools: process.env.NODE_ENV !== 'production'
});

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
