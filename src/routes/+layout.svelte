<script lang="ts">
  import { page } from '$app/stores'
  import { TabItems } from '$lib'
  import { Layout } from '@jill64/npm-demo-layout'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
  import { code } from './code'
</script>

<Layout {packageJson} {README}>
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
  <main>
    <output>
      Current location : {$page.url.href}
    </output>
    <div style:font-size="large" style:overflow-x="auto">
      <HighlightSvelte {code} />
    </div>
  </main>
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
  ul :global(li) {
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
  ul :global(a):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ul :global(a):active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark) ul :global(a):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark) ul :global(a):active {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
