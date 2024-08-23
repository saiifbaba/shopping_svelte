 <script lang="ts">
	import type { SelectOption } from "../../../common/type";

  export let selected:string="";
  export let options:string[]=[];
  export let onChange:(selected:SelectOption)=>void;
</script>

<select on:change={(e)=>onChange(e.target?.value)} bind:value={selected} class="bg-primary-700 bg-[#eeeee4]  w-3/4 lg:w-1/4 p-2 hover:bg-primary-800  focus:ring-primary-300 font-medium rounded-lg text-slate-400 text-sm">
	{#each options as value}<option {value}>{value} </option>{/each}
</select>