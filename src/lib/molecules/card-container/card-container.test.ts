import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import CardContainer from './card-container.svelte'; // Assuming your component's path
import { SelectOption, type product } from '../../../common/type';
import { currentPage } from './card-container.svelte';
import { maxPages } from './card-container.svelte';
import { selectedCategories } from './card-container.svelte';

const mockData: product[] = [
  {
  "id": '1',
"title": "Product 1",
"price": 100,
"description": "Product 1 desc",
"category": "electronics",
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
  "category": "women's clothing",
  "image": "img",
  "rating": {
  "rate": 4,
  "count": 39
  },
}
];

const updateMaxPages = vi.fn((max) => {
});
const updateCurrentPage=vi.fn((page)=>{
})
const mockRating=5;
const mockLimit=5;
const mockPrice=400;
const mockMaxPages=4;
const mockCurrentPage=1;


test('renders Product List with default props', () => {
  render(CardContainer, { data: mockData,selected:SelectOption.Price,updateCurrentPage,updateMaxPages,rating:mockRating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages});
  // Verify product cards are rendered
  const cardContainer = screen.getByTestId('card-container-element'); 
  expect(cardContainer).toBeInTheDocument();

  // Verify product cards are rendered
  const cardsList = screen.getAllByRole('img'); 
  expect(cardsList.length).toBe(mockData.length);
});

test('sorts products by price when selected option is Price', () => {
  render(CardContainer, { data: mockData, selected: SelectOption.Price,updateCurrentPage,updateMaxPages,rating:mockRating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages});
  const cardList = screen.getAllByRole('img');
  let LowestPriceCard:product=mockData[0];  

  // Verify first card has the lowest price
  expect(cardList[0].id).toBe(LowestPriceCard.id); 

});

test('sorts products by highest rating when selected option is Rating', () => {
  let HighestRatingCard:product=mockData[1];  
  render(CardContainer, { data: mockData, selected: SelectOption.Rating,updateCurrentPage,updateMaxPages,rating:mockRating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages });
  const cardList = screen.getAllByRole('img');
  console.log(mockData);
  expect(cardList[0].id).toBe(HighestRatingCard.id); 
});


test('filters products by search text', () => {
  let SearchedCard:product=mockData[1];  
  render(CardContainer, { data: mockData, searchText: 'Product 1',updateCurrentPage,updateMaxPages,rating:mockRating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages });
  const cardList = screen.getAllByRole('img'); 
  expect(cardList.length).toBe(1);
  expect(cardList[0].id).toBe(SearchedCard.id);
});

test('filters products on based of category', () => {
  let category="women's clothing";
  let SearchedCard:product=mockData.filter((data)=>{
    return data.category===category;
  })[0];  
  render(CardContainer, { data: mockData,selectedCategories:[category], updateCurrentPage,updateMaxPages,rating:mockRating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages });
  const cardList = screen.getAllByRole('img'); 
  expect(cardList.length).toBe(1);
  expect(cardList[0].id).toBe(SearchedCard.id);
});


  test('filters products on based of top rating', () => {
  let rating =2;
  let SearchedCard:product=mockData.filter((data)=>{
    return data.rating.rate<=rating
  })[0];  
  render(CardContainer, { data: mockData, updateCurrentPage,updateMaxPages,rating,price:mockPrice,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages });
  const cardList = screen.getAllByRole('img'); 
  expect(cardList.length).toBe(1);
  expect(cardList[0].id).toBe(SearchedCard.id);
});

test('filters products based on low to high price', () => {
  let priceRange=150;
  let SearchedCard:product=mockData.filter((data)=>{
    return data.price<=priceRange
  })[0];  
  render(CardContainer, { data: mockData, updateCurrentPage,updateMaxPages,rating:mockRating,price:priceRange,limit:mockLimit,currentPage:mockCurrentPage,maxPages:mockMaxPages });
  const cardList = screen.getAllByRole('img'); 
  expect(cardList.length).toBe(1);
  expect(cardList[0].id).toBe(SearchedCard.id);
});