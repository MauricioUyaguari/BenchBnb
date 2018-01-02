import React from 'react';
// frontend/bench_bnb.jsx

import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';



import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});


const user = {username: "mauricio", password: "password"};
