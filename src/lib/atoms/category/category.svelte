<script lang="ts">
	import { getContext } from "svelte";
	import type { product } from "../../../common/type";
   export let title="";
   export let data:product[];
   const  categories:string[]=[];
   let selectedCategories:string[]=[];
   const categoryStore:any=getContext("category");
   data.length>0 &&  data.forEach((product)=>{
     if(!categories.includes(product.category)){
      categories.push(product.category);
     }
   });
   $:categoryStore.set(selectedCategories); 
</script>

<div class="w-full h-42 lg:w-72 lg:h-44 card-background-color p-2 rounded">
 <div class="title">
   <h2 class="font-bold ml-2">{title}</h2>
 </div>
 <div class="checkbox-container mt-2 ml-2">
  {#each categories as category}
  <input type="checkbox" id={category} name={category}   bind:group={selectedCategories} value={category}>
  <label for="category" class={`${!selectedCategories.includes(category)?"text-[#c5c5c3]":"text-black"}`}>{category}</label><br>
  {/each}
</div>
</div>