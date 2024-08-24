<script lang="ts">
  import { getContext } from 'svelte';
  import { goto } from '$app/navigation';
  import Button  from "$lib/atoms/button/button.svelte";
  import CartCard from "$lib/organisms/cart.svelte";
	import type { cart } from '../../common/type';
  const cart:any = getContext('cart');
  let cartProducts:cart[]=[];
  cart.subscribe((products:any)=>{
    cartProducts=products;
  })

</script>

<div class="cart-container w-full h-full  flex flex-col">
 <div class="w-full order-details p-2 h-full">
   {#if cartProducts.length>0}
   <p class="text-2xl font-bold mt-4">Products Added in Cart</p>
   <CartCard cartProducts={cartProducts}></CartCard>
{:else}
     <p class="mr-2 mt-4 text-xl font-bond">No Items in Cart</p>
     {/if}
 </div>
 <div class="flex justify-end m-3">
  <Button classes="bg-[#2E63D7ff] w-24 p-2 text-white hover:text-black" label="Back" onClick={()=>{goto("/")}}></Button>
 </div>
</div>