<script>
  import { page } from '$app/state'
  import { TabItems } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'
</script>

<main>
  <ul>
    <TabItems
      prefix="/{page.params.page}"
      routes={new Map([
        ['', 'Overview'],
        ['/section1', 'Section 1'],
        ['/section2', 'Section 2'],
        ['/section3', 'Section 3']
      ])}
    />
  </ul>
  <slot />
  <div style:font-size="large" style:overflow-x="auto">
    <HighlightSvelte {code} />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul :global(a) {
    color: gray;
    text-decoration: none;
    padding: 1rem;
    margin-left: 1px solid transparent;
    border-left: 1px solid gray;
  }
  ul :global(a[data-current-location]) {
    color: inherit;
    font-weight: bold;
    margin-left: none;
    border-left: 2px solid teal;
  }
</style>
