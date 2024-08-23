import { getByLabelText, render,screen,fireEvent } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import Range from "./range.svelte";
import { SelectOption } from '../../../common/type';

const onChange=vi.fn((type:SelectOption.Price|SelectOption.Rating,val:number)=>{
})
test("render range with default props",
  ()=>{
  render(Range,{label:SelectOption.Rating,min:0,max:5,breakpoints:[0,1,2,3,4,5],onChange})

  const range=screen.getByTestId("range-container");
  expect(range).toBeInTheDocument();
})

test("range revert to closest breakpoint",async()=>{
  render(Range,{label:SelectOption.Rating,min:0,max:500,breakpoints:[0,50,100,200,300,400],onChange})

  const rangeInput = screen.getByTestId("input-element-range");

  expect(rangeInput).toBeInTheDocument().toHaveAttribute("type","range");
  await fireEvent.change(rangeInput,{target:{value:"80"}});
  expect(onChange).toHaveBeenCalledOnce();
  expect(onChange).toHaveBeenCalledWith(SelectOption.Rating, 100);

})


test("range stays same for no breakpoints",async()=>{
  render(Range,{label:SelectOption.Rating,min:0,max:500,breakpoints:[],onChange})
  const rangeInput = screen.getByTestId("input-element-range");
  expect(rangeInput).toBeInTheDocument().toHaveAttribute("type","range");
  await fireEvent.change(rangeInput,{target:{value:"80"}});;
  expect(onChange).toHaveBeenCalledWith(SelectOption.Rating, 80);

})