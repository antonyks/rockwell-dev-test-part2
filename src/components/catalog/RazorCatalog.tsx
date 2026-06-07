import { CatalogHeader } from "@/components/catalog/CatalogHeader";
  import { FilterPanel } from "@/components/catalog/FilterPanel";
  import { ProductGrid } from "@/components/catalog/ProductGrid";

  export function RazorCatalog() {
    return (
      <section className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 rounded-2xl bg-[#f5f5f4] p-6 sm:p-8">
        <CatalogHeader />
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <FilterPanel />
          <ProductGrid />
        </div>
      </section>
    );
  }
