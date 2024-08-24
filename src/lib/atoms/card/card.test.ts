import { expect, test, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, } from '@testing-library/svelte'
import Card from "./card.svelte";
import Star from "../star/star.svelte";





test('renders Card correctly', () => {
  const onClickFn = vi.fn((id) => {

  });
  const productData = {
    imageUrl: 'img',
    id: '2',
    label: 'product label',
    rating: 4,
    price: 300,
    onClick: onClickFn,
  };
  render(Card, { ...productData })

  //image test
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', productData.imageUrl);

  //label check
  const label = screen.getByText(productData.label);
  expect(label).toBeInTheDocument();

  // Test price
  const price = screen.getByText(`\u20B9${productData.price}`);
  expect(price).toBeInTheDocument();
  const card = screen.getByTestId("card-element"); // Accessible card as a button
    userEvent.click(card);
    fireEvent(card,new MouseEvent('click', {bubbles: true,cancelable: true,}))
    expect(productData.onClick).toHaveBeenCalledTimes(1);
    expect(productData.onClick).toHaveBeenCalledWith(productData.id);
  }

)