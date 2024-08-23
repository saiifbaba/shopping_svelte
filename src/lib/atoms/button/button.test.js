import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import Button from '$lib/atoms/button/button.svelte';

test('renders button correctly and enabled by default', () => {
	render(Button, { label: 'Click' });

	const button = screen.getByRole('button', { name: 'Click' });

	expect(button).toBeInTheDocument();
	expect(button).toBeEnabled();
});

test('render disable button on props disabled', () => {
	render(Button, { label: 'Click', disabled: true });
	const button = screen.getByRole('button', { name: 'Click' });
	expect(button).toBeInTheDocument();
	expect(button).toBeDisabled();
});

test('button click event check', async () => {
	const user = userEvent.setup();
	const onClick = vi.fn();
	render(Button, { label: 'Click', onClick: onClick });
	const button = screen.getByRole('button', { name: 'Click' });
	await user.click(button);
	expect(onClick).toHaveBeenCalledOnce();
});

test('styling button test', async () => {
	render(Button, { label: 'Click', classes: 'bg-white' });
	const button = screen.getByRole('button', { name: 'Click' });
	expect(button).toHaveClass('bg-white');
});
