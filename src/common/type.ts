export type product={
  "id": string,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "rating": {
  "rate": number,
  "count": number
  }
}

export enum SelectOption {
  Default = 'Default',
  Price = 'Price',
  Rating = 'Rating',
}


export interface cart{
  title:string;
  price:number;
  quantity:number;
}