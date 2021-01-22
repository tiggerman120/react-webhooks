import React from 'react';

import './todo/todo.scss';
import ToDo from './todo/todo-connected.js';
import Auth from './auth/auth';
import Signup from './signin/signin';
import LoginContext from './signup/signup';
import Header from './headers/headers';








export default function App(props) {
  return (
    <>
      <Header />
      <ToDo />  
    </>
  );
}