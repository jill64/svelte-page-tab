<script lang="ts">
  import { page } from '$app/state'
  import { TabItems } from '$lib'
  import { Layout } from '@jill64/npm-demo-layout'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'

  let { children } = $props()
</script>

<Layout {packageJson} {README}>
  <p>
    Current location : {page.url.href}
  </p>
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
  {@render children()}
</Layout>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 1rem;
  }
  ul :global(a) {
    color: gray;
    padding: 0.75rem 1rem;
    margin-bottom: 1px solid transparent;
    border-bottom: 1px solid gray;
  }
  ul :global(a[data-current-location]) {
    color: inherit;
    font-weight: bold;
    margin-bottom: none;
    border-bottom: 2px solid rebeccapurple;
  }
  :global(ul a):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  :global(ul a):active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark ul a):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark ul a):active {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
