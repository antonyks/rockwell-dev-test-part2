import { Check } from "lucide-react";

  type FilterOptionProps<T extends string> = {
    label: T;
    checked: boolean;
    onToggle: (value: T) => void;
  };

  export function FilterOption<T extends string>({
    label,
    checked,
    onToggle,
  }: FilterOptionProps<T>) {
    return (
      <label className="flex h-[18px] cursor-pointer items-center gap-2.5 text-sm leading-[18px] text-[#1a1a1a]">
        <button
          type="button"
          aria-pressed={checked}
          aria-label={`${label} filter`}
          onClick={() => onToggle(label)}
          className={`flex size-[18px] shrink-0 items-center justify-center rounded border-[1.5px] transition-colors focus-
          visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a] ${
            checked
              ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
              : "border-[#e5e5e5] bg-white text-transparent hover:border-[#c8c8c8]"
          }`}
        >
          <Check className="size-[11px] stroke-[3]" />
        </button>
        <span>{label}</span>
      </label>
    );
  }
