import { create } from "zustand";
import {
  DEFAULT_IN_STOCK_ONLY,
  DEFAULT_SELECTED_MATERIALS,
  DEFAULT_SELECTED_PRODUCT_ID,
  DEFAULT_SELECTED_TYPES,
  DEFAULT_SORT,
  type CatalogSort,
  type FilterMaterial,
  type RazorType,
} from "@/data/razors";

type FilterKind = "material" | "type" | "stock";

type CatalogState = {
  searchQuery: string;
  selectedMaterials: FilterMaterial[];
  selectedTypes: RazorType[];
  inStockOnly: boolean;
  sort: CatalogSort;
  selectedProductId: string;
  setSearchQuery: (query: string) => void;
  toggleMaterial: (material: FilterMaterial) => void;
  toggleType: (type: RazorType) => void;
  toggleInStockOnly: () => void;
  removeFilter: (kind: FilterKind, value?: FilterMaterial | RazorType) => void;
  clearAllFilters: () => void;
  setSort: (sort: CatalogSort) => void;
  selectProduct: (productId: string) => void;
};

function toggleValue<T>(values: T[], value: T) {
  return values.includes(value)
    ? values.filter((currentValue) => currentValue !== value)
    : [...values, value];
}

export const useCatalogStore = create<CatalogState>((set) => ({
  searchQuery: "",
  selectedMaterials: DEFAULT_SELECTED_MATERIALS,
  selectedTypes: DEFAULT_SELECTED_TYPES,
  inStockOnly: DEFAULT_IN_STOCK_ONLY,
  sort: DEFAULT_SORT,
  selectedProductId: DEFAULT_SELECTED_PRODUCT_ID,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  toggleMaterial: (material) =>
    set((state) => ({
      selectedMaterials: toggleValue(state.selectedMaterials, material),
    })),
  toggleType: (type) =>
    set((state) => ({
      selectedTypes: toggleValue(state.selectedTypes, type),
    })),
  toggleInStockOnly: () =>
    set((state) => ({
      inStockOnly: !state.inStockOnly,
    })),
  removeFilter: (kind, value) =>
    set((state) => {
      if (kind === "material" && value) {
        return {
          selectedMaterials: state.selectedMaterials.filter(
            (material) => material !== value,
          ),
        };
      }

      if (kind === "type" && value) {
        return {
          selectedTypes: state.selectedTypes.filter((type) => type !== value),
        };
      }

      if (kind === "stock") {
        return { inStockOnly: false };
      }

      return state;
    }),
  clearAllFilters: () =>
    set({
      searchQuery: "",
      selectedMaterials: [],
      selectedTypes: [],
      inStockOnly: false,
    }),
  setSort: (sort) => set({ sort }),
  selectProduct: (selectedProductId) => set({ selectedProductId }),
}));
