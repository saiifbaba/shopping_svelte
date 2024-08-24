import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Input from "./input.svelte";
import userEvent from '@testing-library/user-event';

const onSearchMock = vi.fn((search: string) => {
});
const placeholder = 'Search...';
test('renders Search Input correctly with default props', () => {
  
  render(Input, {placeholder,onSearch:onSearchMock});

  // Test input element rendering
  const input = screen.getByTestId('input-element');
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('placeholder', placeholder);

});

test('triggers onSearch event with user input', () => {

  render(Input, {placeholder,onSearch: onSearchMock });

  // Find the input element
  const input = screen.getByTestId('input-element');
  fireEvent.change(input,{target:{value:"HELLO WORLD"}})
  expect(input).toHaveValue('HELLO WORLD')

  //trigger events
  fireEvent.input(input, { key: 'a' });
  fireEvent.input(input, { key: 'b' });
  fireEvent.input(input, { key: 'c' });
  expect(onSearchMock).toBeCalledTimes(3);
});
