import { Signal, useSignal, useComputed, ReadonlySignal } from "react-signaler";
import { createService } from "../utils/createService";
import type { Categories } from "../types/dtos";
import { ProductOrderOption, ProductStates } from "../types/appTypes";

export const { Service: AppService, useService: useAppService } = createService(
  () => {
    const { signal } = useSignal();
    const { computed } = useComputed();

    const listOfProducts: Signal<{
      loading: boolean;
      list: ProductStates;
    }> = signal("listOfProducts", () => ({
      loading: true,
      list: [] as ProductStates,
    }));

    const categories: Signal<{
      loading: boolean;
      selected: string;
      list: Categories;
    }> = signal("categories", () => ({
      loading: true,
      selected: "No filter",
      list: ["No filter"],
    }));

    const orderSelector = signal("orderSelector", () => ({
      type: null as null | ProductOrderOption,
      order: null as null | "asc" | "desc",
    }));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) =>
        categories.update((data) => ({
          ...data,
          loading: false,
          list: ["No filter", ...json],
        }))
      );

    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((res) =>
        listOfProducts.update((data) => ({
          ...data,
          loading: false,
          list: res,
        }))
      );

    const filteredProducts: ReadonlySignal<{
      loading: boolean;
      list: ProductStates;
    }> = computed("filteredProducts", () => {
      const { selected } = categories.get();
      if (selected === "No filter") return { ...listOfProducts.get() };
      return {
        ...listOfProducts.get(),
        list: listOfProducts
          .get()
          .list.filter((value) => value.category === selected),
      };
    });

    return {
      filteredProducts,
      listOfProducts,
      categories,
      orderSelector,
    };
  }
);
