<script lang="ts">
	import { getContext } from "svelte";
	import type { cart } from "../../common/type";
	import Button from "$lib/atoms/button/button.svelte";
  export let cartProducts:cart[]=[];
  import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";


  const showToast = () => {
    const toast = toasts.add({
      title: 'Success',
      description: 'Order Placed successfully',
      duration: 3000, // 0 or negative to avoid auto-remove
      placement: 'bottom-right',
      type: 'info',
      theme: 'dark',
      placement: 'bottom-right',
			showProgress: true,
      type: 'success',
      theme: 'dark',
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  }
  const cart:any = getContext('cart');
  let totalPrice=0;
  cart.subscribe((products:any)=>{
    cartProducts=products;
    calculatePrice();
  })
  function calculatePrice(){
    totalPrice=0;
    cartProducts.map((product)=>{
      totalPrice+=(product?.price*product.quantity)
    })
  }
  function handleCart(title:string,operation:string){
    if(operation==="add"){
      cartProducts=cartProducts.map((product)=>{
        if(product.title===title){
          product.quantity++;
          return product;
        }
        return product;
      });
    }else{
      cartProducts=cartProducts.filter((product)=>{
        if(product.title===title){
          if(product.quantity===1){
            return
          }
          product.quantity--;
          return product;
        }
        return product;
      })
    }
    calculatePrice();
    cart.set(cartProducts);
  }
</script>

<div class="cart w-full h-3/4 flex justify-center">
  <div class="w-full mt-3 lg:w-1/2 card-background-color h-full overflow-y-auto flex flex-col gap-3  p-2">
    <div class="flex-grow">
    {#each cartProducts as product,index}
    <div class="product w-full flex flex-row gap-2">
      <div class="title w-3/6 font-bold font-serif">
        <h1>{index+1}. {product.title}</h1>
      </div>
      <div class="quantity w-2/6 flex-1 flex gap-2 items-center justify-center">
        <Button classes="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600" label="-" onClick={()=>{handleCart(product.title,"sub")}}/>
          <span class="text-green-500 font-mono text-xl">{product.quantity}</span>
        <Button classes="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600" label="+" onClick={()=>{handleCart(product.title,"add")}}/>
      </div>
      <div class="price flex items-center justify-center w-1/6">
         <p class="text-xl font-mono font-bold"> {`\u20B9`}{product.price}</p>
      </div>
    </div>
    {/each}
  </div>
    <div class="flex justify-between">
      <p class="font-mono text-xl font-bold">Total Price : {`\u20B9`}{totalPrice}</p>
      <Button label="Order Now" classes="bg-sky-700 text-white p-2 rounded hover:text-black" onClick={showToast}></Button>
    </div>
    <ToastContainer let:data={data}>
      <FlatToast {data}  />
    </ToastContainer>
  </div>
</div>