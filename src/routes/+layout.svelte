<script lang="ts">
  import { page } from '$app/stores'
  import { TabItems } from '$lib'
  import { Layout } from '@jill64/npm-demo-layout'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
</script>

<Layout {packageJson} {README}>
  <p>
    Current location : {$page.url.href}
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
  <slot />
</Layout>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }
  :global(ul li) {
    display: contents;
  }
  ul :global(a) {
    color: gray;
    text-decoration: none;
    padding: 0.75rem 1rem;
    border-bottom: 2px solid transparent;
  }
  ul :global(a[data-current-location]) {
    color: inherit;
    font-weight: bold;
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
