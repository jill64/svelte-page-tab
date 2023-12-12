export const code = /* html */ `
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
`
