
<script  lang="ts">
  import Button from "$lib/atoms/button/button.svelte";
  import { goto } from '$app/navigation';
  import { getContext } from 'svelte';
	import type { cart, product } from "../../common/type";
  const cartStore:any= getContext('cart');
  export let product:product;

  function addToCart(title:string,price:number){
    cartStore.update((cart:cart[])=>{
      const product = cart.find(product => product.title === title);
      if (product) {
        product.quantity++;
       }   else {
         cart.push({ title, price, quantity: 1 });
       }
      return cart;
    })
    goto("/cart")
  }
</script>
<div class="product w-4/5 border  grid  lg:grid-cols-2 bg-[#2f4558] rounded-lg">
<div class="product-image-container p-4 w-full lg:w-1/2">
  <img class=" mix-blend-multiply" src={product.image} alt="id">
</div>
  <div class="flex flex-col product-details p-4">
    <div class="title">
      <h1 class="text-xl text-[#afb9c2] font-bold">{product.title}</h1>
    </div>
    <div class="product-desc font-sm  text-[#afb9c2] text-sm mt-2">
     <p>{product.description}</p>
    </div>
    <div class="product-rating flex-grow flex justify-between mt-4">
      <p class="text-[#afb9c2] heading-text-color">Rating: {product.rating.rate}</p>
      <p class="text-[#afb9c2] ml-4 heading-text-color">Price: {`\u20B9`} {product.price}</p>
    </div>
    <div class="buttons-container flex w-full">
      <Button classes="w-1/2 border p-2 bg-[#2E63D7ff] hover:text-white " label={"Back"} onClick={()=>{goto("/")}}></Button>
      <Button classes="w-1/2 p-2 border bg-[#06D001] hover:text-white" label={"Add to Cart"} onClick={()=>{addToCart(product.title,product.price)}}></Button>
    </div>
  </div>
</div>