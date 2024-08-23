  <script>
  import Dashboard from "$lib/organisms/dashboard.svelte";
  import {SelectOption} from "../common/type";
  let selected:SelectOption = SelectOption.Default;
  let searchText:string="";
	const options =[
		SelectOption.Default,
		SelectOption.Price,
@@ -13,8 +14,12 @@
    selected=newlySelected;
  }
  function onSearch(search:string){
    searchText=search;
  }
</script>
<div class="p-2 dashboard-container  app-background h-100 w-100">
  <Dashboard bind:selected={selected} onChange={onChange}  options={options} data={data.products}></Dashboard>
  <Dashboard bind:selected={selected} onSearch={onSearch} onChange={onChange}  options={options} data={data.products} searchText={searchText}></Dashboard>
</div>