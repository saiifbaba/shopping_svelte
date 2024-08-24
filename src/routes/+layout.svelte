<script>
  import Header from "$lib/organisms/header.svelte";
import "../app.css";
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */
	// Create a store and update it when necessary...
	const cart = writable([]);
	const searchText=writable("");
	const selectedCategories=writable([]);
	const maxRating=writable(5);
	const maxPricing=writable(1000);
	
	setContext('cart', cart);
	setContext("search",searchText);
	setContext("category",selectedCategories);
	setContext('maxPrice',maxPricing);
	setContext('maxRating',maxRating)

</script>


<div class="main-component h-screen flex flex-col">
	<div class="layout"> 
		<Header></Header>
	</div>
	<div class="flex-1 h-full">
		<slot></slot> 
		</div>
	</div>