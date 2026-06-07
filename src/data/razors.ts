export const MATERIAL_OPTIONS = [
  "Chrome",
  "Gunmetal",
  "White Chrome",
  "Rose Gold",
] as const;

export const TYPE_OPTIONS = ["Adjustable", "Fixed"] as const;

export const SORT_OPTIONS = ["Featured", "Price: Low to High", "Price: High to Low", "Name"] as const;

export type FilterMaterial = (typeof MATERIAL_OPTIONS)[number];
export type RazorType = (typeof TYPE_OPTIONS)[number];
export type CatalogSort = (typeof SORT_OPTIONS)[number];

export type Razor = {
  id: string;
  name: string;
  material: string;
  filterMaterial: FilterMaterial;
  type: RazorType;
  price: number;
  inStock: boolean;
  featuredRank: number;
};

export const DEFAULT_SELECTED_MATERIALS: FilterMaterial[] = ["Chrome", "Gunmetal"];
export const DEFAULT_SELECTED_TYPES: RazorType[] = ["Adjustable"];
export const DEFAULT_IN_STOCK_ONLY = true;
export const DEFAULT_SORT: CatalogSort = "Featured";
export const DEFAULT_SELECTED_PRODUCT_ID = "rockwell-6s-adjustable";

export const razors: Razor[] = [
  {
    id: "rockwell-6s-adjustable",
    name: "Rockwell 6S Adjustable",
    material: "Stainless Steel",
    filterMaterial: "Chrome",
    type: "Adjustable",
    price: 120,
    inStock: true,
    featuredRank: 1,
  },
  {
    id: "rockwell-6c",
    name: "Rockwell 6C",
    material: "Chrome",
    filterMaterial: "Chrome",
    type: "Fixed",
    price: 80,
    inStock: true,
    featuredRank: 2,
  },
  {
    id: "rockwell-t2",
    name: "Rockwell T2",
    material: "Gunmetal",
    filterMaterial: "Gunmetal",
    type: "Adjustable",
    price: 50,
    inStock: true,
    featuredRank: 3,
  },
  {
    id: "rockwell-r1",
    name: "Rockwell R1",
    material: "White Chrome",
    filterMaterial: "White Chrome",
    type: "Fixed",
    price: 40,
    inStock: true,
    featuredRank: 4,
  },
  {
    id: "rockwell-model-t",
    name: "Rockwell Model T",
    material: "Matte Black",
    filterMaterial: "Gunmetal",
    type: "Adjustable",
    price: 150,
    inStock: true,
    featuredRank: 5,
  },
  {
    id: "rockwell-2c",
    name: "Rockwell 2C",
    material: "Chrome",
    filterMaterial: "Chrome",
    type: "Fixed",
    price: 30,
    inStock: true,
    featuredRank: 6,
  },
  {
    id: "rockwell-6s-rose-gold",
    name: "Rockwell 6S Rose Gold",
    material: "Rose Gold",
    filterMaterial: "Rose Gold",
    type: "Adjustable",
    price: 130,
    inStock: true,
    featuredRank: 7,
  },
  {
    id: "rockwell-6c-gunmetal",
    name: "Rockwell 6C Gunmetal",
    material: "Gunmetal",
    filterMaterial: "Gunmetal",
    type: "Fixed",
    price: 85,
    inStock: true,
    featuredRank: 8,
  },
  {
    id: "rockwell-2c-white-chrome",
    name: "Rockwell 2C White Chrome",
    material: "White Chrome",
    filterMaterial: "White Chrome",
    type: "Fixed",
    price: 35,
    inStock: false,
    featuredRank: 9,
  },
  {
    id: "rockwell-t2-chrome",
    name: "Rockwell T2 Chrome",
    material: "Chrome",
    filterMaterial: "Chrome",
    type: "Adjustable",
    price: 140,
    inStock: true,
    featuredRank: 10,
  },
  {
    id: "rockwell-r1-gunmetal",
    name: "Rockwell R1 Gunmetal",
    material: "Gunmetal",
    filterMaterial: "Gunmetal",
    type: "Fixed",
    price: 45,
    inStock: false,
    featuredRank: 11,
  },
  {
    id: "rockwell-6c-rose-gold",
    name: "Rockwell 6C Rose Gold",
    material: "Rose Gold",
    filterMaterial: "Rose Gold",
    type: "Fixed",
    price: 95,
    inStock: true,
    featuredRank: 12,
  },
];
