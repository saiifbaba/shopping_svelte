<script lang="ts">
import { type product } from "../../../common/type";
import Product from "$lib/organisms/product.svelte";
type dataType={
  product:product
}
export let data:dataType;
</script>

<div class="product-page w-full flex justify-center mt-12">
<Product product={data.product}></Product>
</div>
