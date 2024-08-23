
type fetchType=()=>any;
export async function load({fetch:fetchType})
{
  const res = await fetch(`https://fakestoreapi.com/products`);
	const products = await res.json();
	return  {products};
}