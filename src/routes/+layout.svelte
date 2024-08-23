<script>
  import "../app.css";
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