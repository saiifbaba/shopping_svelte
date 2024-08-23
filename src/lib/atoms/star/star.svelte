<script lang="ts">
  import FilledStar from "$lib/icons/filled-star.svelte";
  import UnfilledStar from "$lib/icons/unfilled-star.svelte";
  export let rating:number;
  $:unfilled=5-rating;
</script>

<div class="flex">
{#each Array(rating) as _, index}
<FilledStar/>
{/each}
{#each Array(unfilled) as _, index}
<UnfilledStar/>
{/each}
</div>