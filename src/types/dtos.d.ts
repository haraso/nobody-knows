export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export type PartialProduct = Partial<Product>;
export type Products = Product[];

export type Categories = string[];

// export interface ChartProductItem {
//   productId: number;
//   quantity: number;
// }
// export interface Chart {
//   id: number;
//   userId: number;
//   date: string;
//   products: ChartProductItem[];
// }
// export type ChartState = DTOToState<Chart>;
// export type Charts = Chart[];
