<script lang="ts">
  export let onClick:()=>void;
  export let label:string;
  export let disabled:boolean=false;
  export let classes:string="";
</script>


<button disabled={disabled} on:click={onClick} class={classes}>{label}
  <slot/>
</button>

