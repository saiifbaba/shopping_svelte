<script lang="ts">
  import Input from "$lib/atoms/input/input.svelte";
  import CartIcon from "$lib/icons/cart.svelte";
  import SearchIcon from "$lib/icons/search.svelte";
  import { page } from '$app/stores'
  import { goto } from '$app/navigation';
  import {getContext} from "svelte";
  const searchStore:any= getContext('search');
  const onSearch=(search:string)=>{
    searchStore.set(search)
  };
  const  onCartClick=()=>{
    goto("/cart");
  }
  $:showSearch=$page.url.pathname==="/"?true:false;

</script>

<div class="header w-full p-4  flex items-center justify-between bg-black">
  <div class="title-header">
    <h1 class="p-2 text-white font-serif font-bold text-xl lg:text-3xl">Fake Store</h1>
  </div>
  {#if showSearch}
  <div class="w-1/2 flex items-center justify-around">
    <div class="search-container w-4/5 flex bg-white rounded hover:cursor-pointer">
      <div class="grow">
        <Input placeholder="Search for product.."  onSearch={onSearch} classes="w-full   rounded px-2 text-slate-400 p-1 outline-none">
        </Input>
      </div>
      <div>
        <div class="bg-[#feba6a] h-full w-full flex items-center px-2 rounded">
          <SearchIcon width="20px" height="20px"></SearchIcon>
        </div>
      </div>
    </div>
    <button class="cart-icon hover:cursor-pointer" on:click={onCartClick}>
    <CartIcon fillColor="#feba6a"></CartIcon>
    </button>
    </div>
  {/if}
</div>