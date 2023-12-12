<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-page-tab

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/svelte-page-tab"><img src="https://img.shields.io/npm/v/svelte-page-tab" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-page-tab"><img src="https://img.shields.io/npm/l/svelte-page-tab" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-page-tab"><img src="https://img.shields.io/npm/dm/svelte-page-tab" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-page-tab"><img src="https://img.shields.io/bundlephobia/min/svelte-page-tab" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-page-tab/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-page-tab/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

🎹 Tab menu component that uses page as a state

<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i svelte-page-tab
```

## Usage

```svelte
<script>
  import { TabItems } from 'svelte-page-tab'
</script>

<ul>
  <TabItems
    list={[
      { href: '/', label: 'Root' },
      { href: '/page1', label: 'Page 1' },
      { href: '/page2', label: 'Page 2' },
      { href: '/page3', label: 'Page 3' }
    ]}
  />
</ul>

<style>
  ul {
    /* list styles */
  }
  ul :global(li) {
    /* list item styles */
  }
  ul :global(a) {
    /* list item link styles */
  }
  ul :global(a[data-current-location]) {
    /* list item link (current location) styles */
  }
</style>
```
