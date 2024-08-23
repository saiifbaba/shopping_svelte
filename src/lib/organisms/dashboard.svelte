















<div class="dashboard w-full flex flex-col lg:flex-row gap-4 mt-2 p-4">
  <div class="category-container-left w-full lg:w-1/5">
    <Category title="Sort With Categories" data={data}></Category>
    <RangeContainer></RangeContainer>
  </div>
  <div class="category-container-right grow">
     <div class="dashboard-header flex justify-between items-center w-full card-background-color p-1 rounded">
      <div class="w-1/2 flex gap-2 items-center dropdown ml-1 py-1">
        <span class="text-sm lg:text-xl font-bold -mt-1">Sort By</span>
        <Dropdown onChange={onChange} selected={selected}  options={options}></Dropdown>
      </div>
      <div class="pagination icons flex">
        <p class="text-sm text-slate-400 mr-1">Page: {currentPage}</p>
        <button on:click={()=>{navigatePage("sub")}}>
          <Backward></Backward>
        </button>
        <button on:click={()=>{navigatePage("add")}}>
          <Forward></Forward>
        </button>
      </div>
      </div>
      <div class="mt-5 ml-4 w-full">
        <CardContainer limit={limit} currentPage={currentPage} maxPages={maxPages}  rating={rating} price={price}  selectedCategories={ selectedCategories} data={data} selected={selected} searchText={searchText} updateMaxPages={updateMaxPages} updateCurrentPage={updateCurrentPage}></CardContainer>
   </div> 
  </div>
</div>