import { CatalogHeader } from "@/components/catalog/CatalogHeader";
  import { FilterPanel } from "@/components/catalog/FilterPanel";

  export function RazorCatalog() {
    return (
      <section className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 rounded-2xl bg-[#f5f5f4] p-6 sm:p-8">
        <CatalogHeader />
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <FilterPanel />
          <div
            aria-hidden="true"
            className="min-h-[420px] flex-1 rounded-xl border border-dashed border-[#e5e5e5] md:w-[744px]"
          />
        </div>
      </section>
    );
  }
