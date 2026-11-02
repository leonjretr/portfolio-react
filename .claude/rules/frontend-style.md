# Frontend style

## Functions

- Always use `const` arrow-function definitions

```typescript
const handleSubmit = () => {
  // ...
};
```

## Imports / Exports

- Always use named exports, never default exports

```typescript
export const ProfileCard = () => { ... };
```

- Always re-export through `index.ts` files

```typescript
// index.ts
export { ProfileCard } from "./ProfileCard";
```

## Format

- Apply prettier (if possible) to files that you changed

## Naming

- Do not use one-letter naming
- Use descriptive, intention-revealing short names: `isLoading`, `handleSubmit`, `profile` — not `i`, `hS`, `p`, and not overlong ones like `isUserProfileLoading`, `handleUserProfileSubmit`. Prefer the shortest name that stays clear
- Boolean variables prefixed with `is`, `has`, or `can`
- The component in a `page.tsx` is always named `Page` — never `Home`, `ProfilePage` or anything
  route-specific

```typescript
const Page = () => { ... };

export default Page;
```

## Types

- Use `type`, don't use `interface`
- Avoid `any`; use `unknown` when the type is truly unknown

## Components

- Keep components small and focused on a single responsibility (SRP, SLAP, KISS)
- Every hook file starts with `"use client"`. One import from the root hooks barrel pulls the whole
  layer into the module graph, so each file declares the boundary itself

## Layout

- Use flex to lay out elements side by side or in a row — never position siblings one by one
- When several elements overlay something, put one `absolute` flex container over it and place the
  elements inside that, instead of giving each element its own `absolute` offsets

```tsx
<div className="absolute inset-x-2 bottom-2 flex items-end">
  <button type="button">edit</button>
  <button type="button" className="ml-auto">
    replace
  </button>
</div>
```

## No hardode

- Do not hardcode strings, numbers, or other values that may change in the future. Use constants, enums, or configuration files instead.
- This covers everything, not just the values that look configurable: thresholds, timings, ratios,
  CSS values assigned from JS, DOM selectors, key-to-action maps, and default records.
- Group a related set into one object constant with `SCREAMING_SNAKE` keys rather than scattering
  loose ones: `EDITOR_OUTPUT = { TYPE, EXTENSION, QUALITY, FILL }`.
- **Tailwind class strings are not constants.** They are written inline in JSX, with `cn()` for
  conditionals, and are never lifted into a named `const` — not even when repeated in the same file.
- The one thing that stays in the component file is a `cva()` variant map, which is the component's
  own API and cannot be inlined.
- A constant a caller will mutate is **spread on the way in, never used by reference** — otherwise
  every consumer shares and corrupts the one object:

```typescript
const dragRef = useRef({ ...PHOTO_DRAG_IDLE });
```

## Styling

- **No arbitrary Tailwind values** — no `top-[6%]`, `px-[22px]`, `text-[clamp(...)]`, `max-[760px]:`,
  `bg-[linear-gradient(...)]`, `w-(--var)`. ESLint rejects them.
- Use the spacing scale (`px-5.5`, `size-26`), fractions (`w-7/8`) and the design tokens in
  `src/app/globals.css`: type scale (`text-display-lg`, `text-heading`, `text-meta`), spacing
  (`py-section`, `-mt-header`), `max-w-measure`, breakpoints (`max-md`, `max-nav`), shadows, easing.
- A value the scale does not cover becomes a token in `@theme`, or a named `@utility` for composite
  CSS (gradients, masks, clip paths). Script-specific sizes override the token under
  `html[data-script="cyrillic"]` instead of using a variant in markup.
- Repeated markup becomes a component (`Container`, `SectionHeader`, `DecorArt`), not a copied class
  string.
- `data-[…]` / `aria-[…]` state selectors are fine — they are selectors, not values.

## Comments

- No comments!
