import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/userEvent';

describe('Form', () => {
  test('can add an item to the list', async () => {
    render(<App />)
    userEvent.type(screen.getTestById('todoItem'), 'Eat Pizza');
    userEvent.type(screen.getByTestId('assignAssignee'), 'Charles & Logan');
    userEvent.click(screen.getByTestId('submit'));
    let items = await waitFor(() => {
      screen.getAllByRole('listitem')
    })
    expect(items[items.length -1]).toHaveTextContent('Eat Pizza');
  })
})
