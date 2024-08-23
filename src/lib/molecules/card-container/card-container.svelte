<script lang="ts">
 import {SelectOption,type product } from "../../common/type";
 import Card from "../atoms/card.svelte";
 export let data:product[];
 export let selected:SelectOption;
  export let selectedCategories:string[]=[];
 let filteredData:product[]=[];
 $:if(selected!==SelectOption.Default){
    filteredData=data.sort((item1:product,item2:product)=>{
     return selected===SelectOption.Price?item1.price-item2.price:item2.rating.rate-item1.rating.rate;
    })
  }else{
      filteredData=data;
  }
</script>

<div class="card-container w-full lg:w-4/5  grid grid-cols-2  lg:grid-cols-3 gap-4">
    {#each  filteredData as item}
        <Card label={item.title} price={item.price} rating={item.rating.rate} imageUrl={item.image}></Card>
    {/each}
</div>