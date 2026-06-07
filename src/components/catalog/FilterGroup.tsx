import { FilterOption } from "@/components/catalog/FilterOption";

  type FilterGroupProps<T extends string> = {
    label: string;
    options: readonly T[];
    selectedValues: readonly T[];
    onToggle: (value: T) => void;
  };

  export function FilterGroup<T extends string>({
    label,
    options,
    selectedValues,
    onToggle,
  }: FilterGroupProps<T>) {
    return (
      <section className="flex flex-col gap-3.5">
        <h2 className="text-xs font-semibold uppercase leading-4 tracking-[0.72px] text-[#6b7280]">
          {label}
        </h2>
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <FilterOption
              key={option}
              label={option}
              checked={selectedValues.includes(option)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </section>
    );
  }
