import { X } from "lucide-react";

  import { useCatalogStore } from "@/stores/catalog-store";

  type ActiveFilterChip = {
    id: string;
    label: string;
    onRemove: () => void;
  };

  export function ActiveFilterChips() {
    const selectedMaterials = useCatalogStore((state) => state.selectedMaterials);
    const selectedTypes = useCatalogStore((state) => state.selectedTypes);
    const inStockOnly = useCatalogStore((state) => state.inStockOnly);
    const removeFilter = useCatalogStore((state) => state.removeFilter);

    const chips: ActiveFilterChip[] = [
      ...selectedMaterials.map((material) => ({
        id: `material-${material}`,
        label: material,
        onRemove: () => removeFilter("material", material),
      })),
      ...selectedTypes.map((type) => ({
        id: `type-${type}`,
        label: type,
        onRemove: () => removeFilter("type", type),
      })),
    ];

    if (inStockOnly) {
      chips.push({
        id: "stock",
        label: "In stock",
        onRemove: () => removeFilter("stock"),
      });
    }

    if (chips.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={chip.onRemove}
            className="flex items-center gap-1.5 rounded-full bg-[#efefee] px-2.5 py-1.5 text-[13px] font-medium leading-4 text-[#1a1a1a] transition-colors hover:bg-[#e4e4e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
          >
            <span>{chip.label}</span>
            <X className="size-[11px] text-[#6b7280]" />
          </button>
        ))}
      </div>
    );
  }
