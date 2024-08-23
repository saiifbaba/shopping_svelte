import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen, } from '@testing-library/svelte'
import Dropdown from "./dropdown.svelte";


const onChangeMock = vi.fn((selectedOption: string) => {
});
test('renders Dropdown correctly with default props', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const selectedValue = options[0];

  render(Dropdown, { options, selected: selectedValue, onChange: onChangeMock});

  // dropdown rendering
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeInTheDocument();

  // Test initial options rendering
  const optionsList = screen.getAllByRole('option');
  expect(optionsList.length).toBe(options.length);
});

test('check fire onChange event', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const selectedValue = options[1]; // Pre-selected option

  render(Dropdown, { options, selected: selectedValue, onChange: onChangeMock });

  // fire change event
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: options[2] } }); // Change to a different option

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith(options[2]); // Verify new selected value



   //selected changed or not
   const selectedOption = screen.getByRole('option', { selected: true });
   expect(selectedOption).toBeInTheDocument();
   expect(selectedOption.textContent?.trim()).toBe(options[2].trim());

});