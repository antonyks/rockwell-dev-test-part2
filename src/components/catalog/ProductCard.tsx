import { Check } from "lucide-react";

  import type { Razor } from "@/data/razors";

  type ProductCardProps = {
    razor: Razor;
    selected: boolean;
    onSelect: (productId: string) => void;
  };

  export function ProductCard({ razor, selected, onSelect }: ProductCardProps) {
    return (
      <article className="h-[260px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white">
        <div className="h-[150px] bg-[#ececeb]" />
        <div className="flex h-[110px] flex-col gap-1.5 p-3.5">
          <div>
            <h3 className="text-[15px] font-semibold leading-5 text-[#1a1a1a]">
              {razor.name}
            </h3>
            <p className="mt-1 text-[13px] leading-5 text-[#6b7280]">
              {razor.material}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between pt-1">
            <p className="text-base font-semibold leading-6 text-[#1a1a1a]">
              ${razor.price}
            </p>
            <button
              type="button"
              onClick={() => onSelect(razor.id)}
              className={`flex h-8 items-center gap-1.5 rounded-lg px-3 text-[13px] font-medium leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a] ${
                selected
                  ? "bg-[#1a1a1a] text-white hover:bg-[#343434]"
                  : "border border-[#e5e5e5] bg-white text-[#1a1a1a] hover:border-[#c8c8c8]"
              }`}
            >
              {selected && <Check className="size-3 stroke-[3]" />}
              {selected ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </article>
    );
  }
