<script lang="ts">
  import FilledStar from "$lib/icons/filled-star.svelte";
  import UnfilledStar from "$lib/icons/unfilled-star.svelte";
  export let rating:number;
  $:unfilled=5-rating;
</script>

<div data-testid="star-test" class="flex">
  <span data-testid="filled-stars" class="flex">
    {#each Array(rating) as _, index}
    <FilledStar/>
    {/each}
  </span>
  <span data-testid="unfilled-stars" class="flex">
    {#each Array(unfilled) as _, index}
    <UnfilledStar/>
    {/each}
  </span>
</div>
