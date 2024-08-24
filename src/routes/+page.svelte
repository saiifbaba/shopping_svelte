<script lang="ts">
  /** @type {import('./$types').LayoutData} */
	export let data:any;
  import Dashboard from "$lib/organisms/dashboard.svelte";
	import Header from "$lib/organisms/header.svelte";
	import { getContext } from "svelte";
  import {SelectOption} from "../common/type";
  let selected:SelectOption = SelectOption.Default;
  let selectedCategories:string[]=[];
  let searchText:string="";
  let price:number;
  let rating:number;
	const options =[
		SelectOption.Default,
		SelectOption.Price,
		SelectOption.Rating
	]
  function onChange(newlySelected:SelectOption){
    selected=newlySelected;
  }
  const searchStore:any = getContext('search');
  searchStore.subscribe((search:string)=>{
    searchText=search;
  })
  const categoryStore:any=getContext('category');
  const priceStore:any=getContext('maxPrice');
  const ratingStore:any=getContext('maxRating');
  categoryStore.subscribe((category:string[])=>{
    selectedCategories=category;
  })
  priceStore.subscribe((rate:number)=>{
    price=rate;
  })
  ratingStore.subscribe((rate:number)=>{
    rating=rate;
  })
  



</script>
<div class="p-2 dashboard-container  app-background h-100 w-100">
  <Dashboard rating={rating} price={price} bind:selected={selected} onChange={onChange}  options={options} data={data.products} searchText={searchText} selectedCategories={selectedCategories}></Dashboard>
</div>