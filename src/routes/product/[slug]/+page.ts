import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load(props: any) {
  const id: string = props.params.slug;
  if (+id >= 1 && +id <= 20) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return { product};
  }else{
    error(404, 'Not found');
  }
}