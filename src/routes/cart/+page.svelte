<script lang="ts">
  import { getContext } from 'svelte';
  import { goto } from '$app/navigation';
  import Button  from "$lib/atoms/button.svelte";
  const cart:any = getContext('cart');
  let totalPrice=0;
  let cartProducts:{}[]=[];
  cart.subscribe((products:any)=>{
    cartProducts=products;
    calculatePrice();
  })
  function calculatePrice(){
    totalPrice=0;
    cartProducts.map((product)=>{
      totalPrice+=product?.price
    })
  }
  function deleteItem(title:string){
    cartProducts=cartProducts.filter((product)=>{
      return product.title!==title;
    });
    calculatePrice();
    cart.set(cartProducts);
  }
</script>

<div class="cart-container w-full flex flex-col">
 <div class="order-details p-2">
   {#if cartProducts.length>0}

   <p class="text-2xl font-bold mt-4">Products Added in Cart</p>
    <div class="bg-[#2f4558] w-1/4 rounded p-2 text-white">
    <ul>
      {#each cartProducts as product}
    <li class="flex justify-between">
    <p class="product-detail flex">{product.title}</p>
  <Button label="X" classes="text-red-300 hover:text-red-700 text-xl font-bold" onClick={()=>{deleteItem(product.title)}}></Button>
   </li>
  {/each}
  </ul>
  <p class="mt-2">Total Price : {`\u20B9`}{totalPrice}</p>
</div>
{:else}
     <p class="mr-2 mt-4 text-xl font-bond">No Items in Cart</p>
     {/if}
 </div>
 <div class="flex justify-end m-3">
  <Button classes="bg-[#2E63D7ff] w-24 p-2 text-white hover:text-black" label="Back" onClick={()=>{goto("/")}}></Button>
 </div>
</div>