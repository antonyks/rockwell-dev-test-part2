import { FilterGroup } from "@/components/catalog/FilterGroup";
  import { StockToggle } from "@/components/catalog/StockToggle";
  import { MATERIAL_OPTIONS, TYPE_OPTIONS } from "@/data/razors";
  import { useCatalogStore } from "@/stores/catalog-store";

  export function FilterPanel() {
    const searchQuery = useCatalogStore((state) => state.searchQuery);
    const selectedMaterials = useCatalogStore((state) => state.selectedMaterials);
    const selectedTypes = useCatalogStore((state) => state.selectedTypes);
    const inStockOnly = useCatalogStore((state) => state.inStockOnly);
    const setSearchQuery = useCatalogStore((state) => state.setSearchQuery);
    const toggleMaterial = useCatalogStore((state) => state.toggleMaterial);
    const toggleType = useCatalogStore((state) => state.toggleType);
    const toggleInStockOnly = useCatalogStore((state) => state.toggleInStockOnly);
    const clearAllFilters = useCatalogStore((state) => state.clearAllFilters);

    return (
      <aside className="w-full rounded-xl border border-[#e5e5e5] bg-white p-5 md:w-[280px] md:shrink-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-6 text-[#1a1a1a]">
              Filters
            </h2>
            <button
              type="button"
              onClick={clearAllFilters}
              className="rounded text-[13px] font-medium leading-5 text-[#6b7280] transition-colors hover:text-[#1a1a1a] focus-
              visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
            >
              Clear all
            </button>
          </div>

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search razors"
            className="h-[37px] w-full rounded-lg border border-[#e5e5e5] bg-[#f9f9f8] px-3 py-2.5 text-sm leading-5 text-[#1a1a1a]
            outline-none placeholder:text-[#6b7280] focus:border-[#1a1a1a] focus:ring-2 focus:ring-[#1a1a1a]/10"
          />

          <FilterGroup
            label="Material"
            options={MATERIAL_OPTIONS}
            selectedValues={selectedMaterials}
            onToggle={toggleMaterial}
          />

          <FilterGroup
            label="Type"
            options={TYPE_OPTIONS}
            selectedValues={selectedTypes}
            onToggle={toggleType}
          />

          <StockToggle checked={inStockOnly} onToggle={toggleInStockOnly} />
        </div>
      </aside>
    );
  }
