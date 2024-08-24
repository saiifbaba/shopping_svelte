<script lang="ts">
	import { SelectOption } from "../../../common/type";

	let value=0;
	export let label:SelectOption.Price|SelectOption.Rating;
  export let min="0";
  export let max="100";
	export let onChange:(type:SelectOption.Price|SelectOption.Rating,val:number)=>void
	export let breakpoints:number[]=[];
	function handleOnChange(type:SelectOption.Price|SelectOption.Rating) {
		    if(breakpoints.length){
					const closest = breakpoints.reduce((prev, curr) => {
						return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
					},0);	
					value = closest;
				}
				onChange(type,value)
    }
</script>

<div data-testid="range-container" class="flex flex-col mt-2 gap-1">
	<label class="font-mono text-sm" for="points">{label}: {min} - {value===0?max:value}</label>
	<input data-testid="input-element-range" type="range" min={min} max={max} bind:value on:change={()=>{handleOnChange(label)}}>
</div>