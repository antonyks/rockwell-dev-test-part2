import { ChevronDown } from "lucide-react";

  import { SORT_OPTIONS, type CatalogSort } from "@/data/razors";
  import { useCatalogStore } from "@/stores/catalog-store";

  type ResultsToolbarProps = {
    resultCount: number;
  };

  export function ResultsToolbar({ resultCount }: ResultsToolbarProps) {
    const sort = useCatalogStore((state) => state.sort);
    const setSort = useCatalogStore((state) => state.setSort);

    return (
      <div className="flex h-8 items-center justify-between">
        <p className="text-[15px] font-semibold leading-5 text-[#1a1a1a]">
          {resultCount} {resultCount === 1 ? "razor" : "razors"}
        </p>
        <label className="relative">
          <span className="sr-only">Sort products</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as CatalogSort)}
            className="h-8 appearance-none rounded-lg border border-[#e5e5e5] bg-white py-1.5 pl-3 pr-8 text-[13px] font-medium
            leading-5 text-[#1a1a1a] outline-none transition-colors hover:border-[#c8c8c8] focus:border-[#1a1a1a] focus:ring-2
            focus:ring-[#1a1a1a]/10"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                Sort: {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-[#6b7280]" />
        </label>
      </div>
    );
  }
