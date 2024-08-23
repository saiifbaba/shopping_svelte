<script>
 
 import "../app.css";
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */
	// Create a store and update it when necessary...
	const cart = writable([]);
	
	setContext('cart', cart);
</script>

<slot />










<div class="main-component h-screen flex flex-col">
	<div class="layout"> 
		<Header></Header>
	</div>
	<div class="flex-1 h-full">
		<slot></slot> 
		</div>
	</div>