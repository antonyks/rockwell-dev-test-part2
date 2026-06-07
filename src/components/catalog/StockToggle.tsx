type StockToggleProps = {
    checked: boolean;
    onToggle: () => void;
  };

  export function StockToggle({ checked, onToggle }: StockToggleProps) {
    return (
      <div className="flex items-center justify-between">
        <span className="text-sm leading-5 text-[#1a1a1a]">In stock only</span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={onToggle}
          className={`relative h-[22px] w-[38px] rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a] ${
            checked ? "bg-[#1a1a1a]" : "bg-[#d7d7d5]"
          }`}
        >
          <span
            className={`absolute left-[3px] top-[3px] size-4 rounded-full bg-white shadow-sm transition-transform ${
              checked ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    );
  }
