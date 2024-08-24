<script lang="ts">
  import CardContainer from "$lib/molecules/card-container/card-container.svelte";
  import { SelectOption, type product } from "../../common/type";
  import Dropdown from "$lib/atoms/dropdown/dropdown.svelte";
	import Category from "$lib/atoms/category/category.svelte";
  import RangeContainer from "$lib/molecules/range-container/range-container.svelte";
	import Button from "$lib/atoms/button/button.svelte";
	import Forward from "$lib/icons/forward.svelte";
	import Backward from "$lib/icons/backward.svelte";
  export let data:product[];
  export let selectedCategories:string[]=[];
  export let selected:SelectOption;
  let noOfProducts=data.length 
  export let onChange:(selected:SelectOption)=>void;
  export let options:string[];
  export let price:number;
  export let rating:number;
  export let searchText:string="";
  const limit=5;
  let currentPage=1;
  let maxPages=Math.floor(data.length/limit);
  function navigatePage(operation:string){
    if(((operation==="add" && currentPage+1>maxPages) || (operation==="sub" &&currentPage-1===0))){
      console.log("OUT OF BOUND");
      return;
    }
    currentPage=operation==="add"? currentPage+1:currentPage-1;

  }
  function updateMaxPages(max:number){
    maxPages=max;
  }
  function updateCurrentPage(pageNo:number){
    currentPage=pageNo;

  }
  
</script>

<div class="dashboard w-full flex flex-col lg:flex-row gap-4 mt-2 p-4">
  <div class="category-container-left w-full lg:w-1/5">
    <Category title="Sort With Categories" data={data}></Category>
    <RangeContainer></RangeContainer>
  </div>
  <div class="category-container-right grow">
     <div class="dashboard-header flex justify-between items-center w-full card-background-color p-1 rounded">
      <div class="w-1/2 flex gap-2 items-center dropdown ml-1 py-1">
        <span class="text-sm lg:text-xl font-bold -mt-1">Sort By</span>
        <Dropdown onChange={onChange} selected={selected}  options={options}></Dropdown>
      </div>
      <div class="pagination icons flex">
        <p class="text-sm text-slate-400 mr-1">Page: {currentPage}</p>
        <button on:click={()=>{navigatePage("sub")}}>
          <Backward></Backward>
        </button>
        <button on:click={()=>{navigatePage("add")}}>
          <Forward></Forward>
        </button>
      </div>
      </div>
      <div class="mt-5 ml-4 w-full">
        <CardContainer limit={limit} currentPage={currentPage} maxPages={maxPages}  rating={rating} price={price}  selectedCategories={ selectedCategories} data={data} selected={selected} searchText={searchText} updateMaxPages={updateMaxPages} updateCurrentPage={updateCurrentPage}></CardContainer>
   </div> 
  </div>
</div>