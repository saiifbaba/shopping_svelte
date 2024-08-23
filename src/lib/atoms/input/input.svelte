<script lang="ts">
export let classes="";
export let placeholder:string;
export let onSearch:(search:string)=>void;
</script>


<div class="input">
<input placeholder={placeholder} on:input={(e)=>{onSearch(e.target?.value)}} class={classes}>
</div>