import { ActiveFilterChips } from "@/components/catalog/ActiveFilterChips";
  import { ProductCard } from "@/components/catalog/ProductCard";
  import { ResultsToolbar } from "@/components/catalog/ResultsToolbar";
  import { razors } from "@/data/razors";
  import { useCatalogStore } from "@/stores/catalog-store";

  function normalizeSearchValue(value: string) {
    return value.trim().toLowerCase();
  }

  export function ProductGrid() {
    const searchQuery = useCatalogStore((state) => state.searchQuery);
    const selectedMaterials = useCatalogStore((state) => state.selectedMaterials);
    const selectedTypes = useCatalogStore((state) => state.selectedTypes);
    const inStockOnly = useCatalogStore((state) => state.inStockOnly);
    const sort = useCatalogStore((state) => state.sort);
    const selectedProductId = useCatalogStore((state) => state.selectedProductId);
    const selectProduct = useCatalogStore((state) => state.selectProduct);

    const normalizedSearchQuery = normalizeSearchValue(searchQuery);
    const filteredRazors = razors
      .filter((razor) => {
        const matchesSearch =
          normalizedSearchQuery.length === 0 ||
          normalizeSearchValue(`${razor.name} ${razor.material} ${razor.filterMaterial} ${razor.type}
          `).includes(normalizedSearchQuery);
        const matchesMaterial =
          selectedMaterials.length === 0 || selectedMaterials.includes(razor.filterMaterial);
        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(razor.type);
        const matchesStock = !inStockOnly || razor.inStock;

        return matchesSearch && matchesMaterial && matchesType && matchesStock;
      })
      .sort((firstRazor, secondRazor) => {
        if (sort === "Price: Low to High") return firstRazor.price - secondRazor.price;
        if (sort === "Price: High to Low") return secondRazor.price - firstRazor.price;
        if (sort === "Name") return firstRazor.name.localeCompare(secondRazor.name);
        return firstRazor.featuredRank - secondRazor.featuredRank;
      });

    return (
      <section className="flex w-full flex-col gap-4 md:w-[744px]">
        <ResultsToolbar resultCount={filteredRazors.length} />
        <ActiveFilterChips />

        {filteredRazors.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredRazors.map((razor) => (
              <ProductCard
                key={razor.id}
                razor={razor}
                selected={razor.id === selectedProductId}
                onSelect={selectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-[#e5e5e5] bg-white p-8 text-center">
            <p className="text-sm leading-5 text-[#6b7280]">
              No razors match the current filters.
            </p>
          </div>
        )}
      </section>
    );
  }
