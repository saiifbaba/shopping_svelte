import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import CardContainer from './card-container.svelte'; // Assuming your component's path
import { SelectOption, type product } from '../../common/type';

const mockData: product[] = [
  {
  "id": '1',
"title": "Product 1",
"price": 100,
"description": "Product 1 desc",
"category": "category",
"image": "img",
"rating": {
"rate": 2,
"count": 29
},
  },
  {
    "id": '2',
  "title": "Product 2",
  "price": 200,
  "description": "Product 2 desc",
  "category": "category",
  "image": "img",
  "rating": {
  "rate": 4,
  "count": 39
  },
}
];

test('renders Product List with default props', () => {
  render(CardContainer, { data: mockData,selected:SelectOption.Price });
  // Verify product cards are rendered
  const cardContainer = screen.getByTestId('card-container-element'); 
  expect(cardContainer).toBeInTheDocument();

  // Verify product cards are rendered
  const cardsList = screen.getAllByRole('img'); 
  expect(cardsList.length).toBe(mockData.length);
});

test('sorts products by price when selected option is Price', () => {
  render(CardContainer, { data: mockData, selected: SelectOption.Price });
  const cardList = screen.getAllByRole('img');
  let LowestPriceCard:product=mockData[0];  

  // Verify first card has the lowest price
  expect(cardList[0].id).toBe(LowestPriceCard.id); 

});

test('sorts products by highest rating when selected option is Rating', () => {
  let HighestRatingCard:product=mockData[1];  
  render(CardContainer, { data: mockData, selected: SelectOption.Rating });
  const cardList = screen.getAllByRole('img');
  console.log(mockData);
  expect(cardList[0].id).toBe(HighestRatingCard.id); 
});


test('filters products by search text', () => {
  let SearchedCard:product=mockData[1];  
  render(CardContainer, { data: mockData, searchText: 'Product 1' });
  const cardList = screen.getAllByRole('img'); 
  expect(cardList.length).toBe(1);
  expect(cardList[0].id).toBe(SearchedCard.id);
});