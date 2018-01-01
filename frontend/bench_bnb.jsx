import React from 'react';
import ReactDOM from 'react-dom';




document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signin = signin;
  window.test = test;
  ReactDOM.render(<h1> Welcome Bitches</h1>, root);
});



const test = {username: "mauricio", password: "password"};

const newUser = {username: "lisaMorocho", password: "password"};


const signin = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user}
  });
};


const signout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};



const create = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  });
};
