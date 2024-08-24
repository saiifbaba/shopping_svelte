<script lang="ts">
 import {SelectOption,type product } from "../../../common/type";
 import { goto } from '$app/navigation';
 import Card from "../../atoms/card/card.svelte";
	import Star from "$lib/atoms/star/star.svelte";
 export let data:product[];
 export let selected:SelectOption;
 export let selectedCategories:string[]=[];
 export let searchText:string="";
 export let rating:number;
 export let currentPage:number;
 export let maxPages:number;
 export let updateCurrentPage:(pageNo:number)=>void;
 export let limit:number;
 export let updateMaxPages:(max:number)=>void;
 export let price:number;
 let filteredData:product[]=data;
 let paginatiedItems:product[]=[];
 $:if(selected!==SelectOption.Default || searchText || selectedCategories.length>0 || rating || price){
    filteredData=data.sort((item1:product,item2:product)=>{
     return selected===SelectOption.Price?item1.price-item2.price:item2.rating.rate-item1.rating.rate;
    })
    
    filteredData=filteredData.filter((data)=>{
    return data.title.toLowerCase().startsWith(searchText.toLowerCase());
   })
   
   if(selectedCategories.length>0){
     filteredData=filteredData.filter((data)=>{
       return selectedCategories.includes(data.category);
      })
    }
    if(rating){
      filteredData=filteredData.filter((data)=>{
        return +data.rating.rate<=rating;
      })
    }
    if(price){
      filteredData=filteredData.filter((data)=>{
        return +data.price<=price;
      })
    }
    let max=Math.round(filteredData.length/limit);
     updateMaxPages(max);
  }else{
      filteredData=data.sort((item1:product,item2:product)=>{
     return (+item1.id) - (+item2.id)
    })
    let max=Math.round(filteredData.length/limit);
    updateMaxPages(max);
}
$:if(currentPage){
        if((currentPage-1)*limit<=filteredData.length){
          paginatiedItems=filteredData.slice((currentPage-1)*limit,currentPage*limit);
        }else{
          paginatiedItems=filteredData;
        }
}
$:if(maxPages){
   if(currentPage>maxPages){
     updateCurrentPage(maxPages);
   }
}


function onCardClick(id:string){
  goto(`/product/${id}`)
}
</script>


<div data-testid="card-container-element"  class="card-container w-full  grid grid-cols-1  lg:grid-cols-3 justify-space-between gap-6">
    {#each  paginatiedItems as item}
        <Card onClick={onCardClick} id={item.id}  label={item.title} price={item.price} rating={item.rating.rate} imageUrl={item.image}>
          <Star rating={Math.floor(item.rating.rate)}></Star>
        </Card>
    {/each}
</div>