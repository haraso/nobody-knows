import type { Product } from "./dtos";

type DTOToState<DTO> = Omit<DTO, "id"> & { id?: number, edited?: boolean };

export type ProductState = DTOToState<Product>;
export type ProductStates =  ProductState[];
export type ProductOrderOption = Omit<
  keyof Product,
  "id" | "category" | "description" | "image"
>;
export type ProductOrderOptions = ProductOrderOption[];
