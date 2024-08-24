
<script lang="ts">
  export let imageUrl:string;
  export let id:string;
  export let label:string;
  export let rating:number;
  export let price:number;
  export let onClick:(id:string)=>void;
  import Star from "../star/star.svelte";
</script>

<div data-testid="card-element" on:click={()=>onClick(id)} class="card-background-color card cursor-pointer font-serif  w-full h-42 lg:w-72 lg:h-72 rounded overflow-hidden shadow-lg bg-white flex flex-col items-center">
  <div class="w-full h-1/2 mt-2 flex justify-center">
    <img  id={id} class="h-full  mix-blend-darken " src={imageUrl} alt="image-alt">
  </div>
  <div class="px-3 py-2 lg:px-6 lg:py-4 flex-grow flex items-center">
    <p class="lg:font-bold text-sm lg:mb-2">{label.length>60?label.substring(0,60):label}</p> 
  </div>
  <div class="flex flex-col lg:flex-row items-center mb-2 justify-between w-full px-5">
    <p class="font-mono">{`\u20B9`}{price}</p>
    <slot></slot>
  </div>
</div>