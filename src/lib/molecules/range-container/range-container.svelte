<script lang="ts">
 import Range from "$lib/atoms/range/range.svelte";
 import {getContext} from "svelte";
	import { SelectOption } from "../../../common/type";
	import Search from "$lib/icons/search.svelte";
 const priceStore:any=getContext('maxPrice');
 const ratingStore:any=getContext('maxRating');
 const onChange=(type:SelectOption.Rating|SelectOption.Price,val:number)=>{
   if(type===SelectOption.Rating){
    ratingStore.set(val);
   }else{
    priceStore.set(val);
   }
 }
</script>
<div class="range-container w-36 h-42 lg:w-72 lg:h-44 p-2  mt-10 card-background-color rounded">
<div class="title font-bold font-mono text-xl">
  <h1>Filter By</h1>
</div>
<div class="ranges">
<div class="rating-range">
<Range  label={SelectOption.Rating} onChange={onChange} min="0" max="5" breakpoints={[0,1,2,3,4,5]}></Range>
</div>
<div class="price-range">
  <Range label={SelectOption.Price} onChange={onChange} min="0" max="200" breakpoints={[0,50,100,150,200]}></Range>
  </div>
</div>
</div>