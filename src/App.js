import { render } from '@testing-library/react';
import React from 'react';
import './todo/todo.scss';
import ToDo from './todo/todo-connected.js';

export default function App(props) {
    return (
      <>
        <ToDo />
      </>
    );
}