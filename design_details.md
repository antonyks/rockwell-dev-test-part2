# Design Details: Razor Catalog Filter Panel

## Source and MCP Record

- Project stack from `README.md`: React 19, Vite 6, TypeScript, Tailwind CSS 3.4, shadcn/ui, Zustand, `@/*` path alias.
- Figma URL used: `https://www.figma.com/design/raU7uXujoXzBo7TSdVj1za/...node-id=0-1`
- Active Figma MCP account confirmed with `whoami`: `justin.personal33@gmail.com`
- `get_metadata` was called for file `raU7uXujoXzBo7TSdVj1za`, node `0:1`.
- Metadata identified the implementation frame as `1:2`, named `Razor Catalog — Filter Panel`.
- `get_design_context` first failed on page node `0:1` because no layer was selected.
- `get_design_context` was then called on frame node `1:2` and returned usable React/Tailwind reference code plus a rendered screenshot.

## Frame Structure

- Main frame: `Razor Catalog — Filter Panel`, node `1:2`.
- Frame size: `1120px` wide by `1046px` high.
- Main frame background: `#f5f5f4`.
- Main frame padding: `32px`.
- Main frame radius: `16px`.
- Main layout direction: vertical, with `24px` gap between header and body.
- Body layout: horizontal flex, `32px` gap.
- Header width: `1056px`.
- Body width: `1056px`, height `904px`.

## Colors and Typography

- Primary text: `#1a1a1a`.
- Muted text: `#6b7280`.
- Border: `#e5e5e5`.
- Page/frame background: `#f5f5f4`.
- Card and panel background: `#ffffff`.
- Search input background: `#f9f9f8`.
- Image placeholder background: `#ececeb`.
- Active chip background: `#efefee`.
- Primary selected controls: `#1a1a1a` background with white text.
- Font family from Figma: Inter.
- Heading: `22px`, semibold, `28px` line height.
- Subtitle: `14px`, regular, `20px` line height.
- Panel title: `16px`, semibold.
- Result count: `15px`, semibold.
- Body labels: `14px`, regular.
- Section labels: `12px`, semibold, uppercase, `0.72px` letter spacing.
- Product title: `15px`, semibold.
- Product material: `13px`, regular, muted.
- Product price: `16px`, semibold.
- Buttons and chips: `13px`, medium.

## Header

- Header node: `1:3`.
- Content:
  - Title: `Shop Razors`.
  - Subtitle: `Precision-engineered safety razors. Filter to find your setting.`
- Header is a vertical flex column with `6px` gap.

## Filter Panel

- Filter panel node: `1:7`.
- Width: `280px`.
- Background: white.
- Border: `1px solid #e5e5e5`.
- Radius: `12px`.
- Padding: `20px`.
- Internal vertical gap: `24px`.

### Filter Header

- Text: `Filters`.
- Clear action: `Clear all`.
- Header layout: horizontal, space-between.
- Clear action color: muted `#6b7280`, `13px` medium.

### Search

- Node: `2:5`.
- Full panel width.
- Height from metadata: `37px`.
- Background: `#f9f9f8`.
- Border: `1px solid #e5e5e5`.
- Radius: `8px`.
- Padding: `12px` horizontal, `10px` vertical.
- Placeholder text: `Search razors`.

### Material Group

- Section label: `MATERIAL`.
- Options, in order:
  - Chrome, checked.
  - Gunmetal, checked.
  - White Chrome, unchecked.
  - Rose Gold, unchecked.
- Option row height: `18px`.
- Gap between checkbox and label: `10px`.
- Gap between option rows: `12px`.
- Checkbox size: `18px`.
- Checkbox radius: `4px`.
- Checkbox border: `1.5px`.
- Checked background and border: `#1a1a1a`.
- Unchecked background: white.
- Unchecked border: `#e5e5e5`.
- Checkmark: white, `11px`, semibold.

### Type Group

- Section label: `TYPE`.
- Options, in order:
  - Adjustable, checked.
  - Fixed, unchecked.
- Same option and checkbox styling as Material.

### Stock Toggle

- Label: `In stock only`.
- Toggle state: on.
- Toggle width: `38px`.
- Toggle height: `22px`.
- Thumb size: `16px`.
- Thumb position: right, `3px` from top.
- Design context referenced a remote switch asset, but implementation should recreate it with CSS or shadcn Switch instead of relying on the temporary Figma asset URL.

## Results Area

- Results container node: `1:8`.
- Width from metadata: `744px`.
- Height from metadata: `904px`.
- Layout: vertical flex with `16px` gap.
- Occupies the remaining body width after the `280px` filter panel and `32px` body gap.

### Toolbar

- Node: `4:2`.
- Height: `32px`.
- Layout: horizontal, space-between.
- Result count text: `12 razors`.
- Sort control:
  - Text: `Sort: Featured`.
  - Down arrow: `▾`.
  - Background: white.
  - Border: `1px solid #e5e5e5`.
  - Radius: `8px`.
  - Padding: `12px` horizontal, `8px` vertical.
  - Internal gap: `8px`.

### Active Filters

- Node: `4:7`.
- Layout: wrapping flex row.
- Gap: `8px`.
- Chips shown, in order:
  - Chrome
  - Gunmetal
  - Adjustable
  - In stock
- Chip background: `#efefee`.
- Chip radius: `999px`.
- Chip padding: `10px` horizontal, `6px` vertical.
- Internal gap: `6px`.
- Remove icon: `✕`, muted `#6b7280`, `11px`.

## Product Grid

- Grid node: `4:20`.
- Width: `744px`.
- Layout in Figma: three horizontal rows, each with two cards.
- Row gap: `16px`.
- Column gap: `16px`.
- Card width from metadata: `364px`.
- Card height from metadata: `260px`.
- Card background: white.
- Card border: `1px solid #e5e5e5`.
- Card radius: `12px`.
- Card overflow: hidden.
- Image placeholder height: `150px`.
- Content area height: `110px`.
- Content padding: `14px`.
- Content vertical gap: `6px`.
- Footer has `4px` top padding and horizontal space-between layout.

### Visible Products

1. Rockwell 6S Adjustable
   - Material: Stainless Steel
   - Price: `$120`
   - Button: selected state, text `✓ Selected`

2. Rockwell 6C
   - Material: Chrome
   - Price: `$80`
   - Button: default state, text `Select`

3. Rockwell T2
   - Material: Gunmetal
   - Price: `$50`
   - Button: default state, text `Select`

4. Rockwell R1
   - Material: White Chrome
   - Price: `$40`
   - Button: default state, text `Select`

5. Rockwell Model T
   - Material: Matte Black
   - Price: `$150`
   - Button: default state, text `Select`

6. Rockwell 2C
   - Material: Chrome
   - Price: `$30`
   - Button: default state, text `Select`

## Button States

- Selected button:
  - Background: `#1a1a1a`.
  - Text: white.
  - Radius: `8px`.
  - Padding: `12px` horizontal, `8px` vertical.
  - Text: `✓ Selected`.
- Default button:
  - Background: white.
  - Border: `1px solid #e5e5e5`.
  - Text: `#1a1a1a`.
  - Radius: `8px`.
  - Padding: `12px` horizontal, `8px` vertical.
  - Text: `Select`.

## Implementation Guidance

- Use the Figma dimensions and tokens above as the visual source of truth.
- Use Tailwind utilities directly where practical because the repo already uses Tailwind.
- Use shadcn/ui `Button` and `Card`; add `Input`, `Checkbox`, `Switch`, `Badge`, or `Select` only if useful and consistent with shadcn defaults.
- Use Zustand for real UI state:
  - selected materials
  - selected type
  - stock-only toggle
  - selected product
  - sort value if made interactive
  - search query if made interactive
- Use React local state or CSS for purely visual hover/focus behavior.
- Do not rely on the temporary Figma asset URL for the switch; recreate the switch with CSS/shadcn.
- Keep the data model simple. The visible Figma data only contains six cards while the toolbar says `12 razors`; the implementation may include these six visible records and keep the displayed count at `12` if matching the static design is prioritized.

## Verification Checklist

- Main component sits on a light stone-gray background with a rounded `1120px` design surface.
- Header text, panel, and results area align to `32px` frame padding.
- Body uses `280px` filter panel, `32px` gap, and `744px` results width.
- Filter panel spacing matches the `20px` padding and `24px` internal section gap.
- Checkboxes are `18px`, selected options are Chrome, Gunmetal, and Adjustable.
- Stock toggle is on.
- Active chips appear in the exact order: Chrome, Gunmetal, Adjustable, In stock.
- Product grid is two columns with `16px` gaps.
- Cards are `364px` by `260px`, with `150px` image placeholders.
- First card uses selected button styling; all other visible cards use default button styling.
- Colors match the extracted Figma values, especially `#1a1a1a`, `#6b7280`, `#e5e5e5`, `#f5f5f4`, `#ececeb`, and `#efefee`.
