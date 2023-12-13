export const code = /* html */ `
<script>
  import { TabItems } from 'svelte-page-tab'
</script>

<ul>
  <TabItems
    routes={new Map([
      ['/', 'Top'],
      ['/page1', 'Page 1'],
      ['/page2', 'Page 2'],
      ['/page3', 'Page 3']
    ])}
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
