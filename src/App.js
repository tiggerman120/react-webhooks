import { render } from '@testing-library/react';
import React from 'react';

import ToDo from './todo/todo.js';

export default function App(props) {
    return (
      <>
        <ToDo />
      </>
    );
}