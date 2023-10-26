import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "../src/redux/store";
import { UserContextProvider } from './contextState/contextState';
import "./index.css"
ReactDOM.render(

  <UserContextProvider>
    <Provider store={store}>
  <App/>
    </Provider>
    </UserContextProvider>
,
  document.getElementById('root')
);