import { render,screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import Star from "./star.svelte"


test("render star with default props",
  ()=>{
  render(Star,{rating:4})
  const range=screen.getByTestId("star-test");
  expect(range).toBeInTheDocument();
})


test("renders correct filled and not filled stars",
  ()=>{
  render(Star,{rating:3})
  const filledStars = screen.getByTestId('filled-stars');
  const unfilledStars = screen.getByTestId('unfilled-stars');
  expect(filledStars.childNodes.length).toBe(3);
  expect(unfilledStars.childNodes.length).toBe(2);
})

test("renders correct filled and not filled stars for zero rating",
  ()=>{
  render(Star,{rating:0})
  const filledStars = screen.getByTestId('filled-stars');
  const unfilledStars = screen.getByTestId('unfilled-stars');
  expect(filledStars.childNodes.length).toBe(0);
  expect(unfilledStars.childNodes.length).toBe(5);
})