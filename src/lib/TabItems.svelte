<script lang="ts">
  import { page } from '$app/state'
  import type { Snippet } from 'svelte'

  /** Map<href, label> */
  let {
    routes,
    prefix = '',
    children
  }: {
    routes: Map<string, string>
    prefix?: string
    children?: Snippet<[string]>
  } = $props()

  let mapped = $derived(
    [...routes.entries()].map(([href, label]) => [prefix + href, label])
  )

  let spec = $derived(
    [...mapped].sort(([a], [b]) => {
      const depth = b.split('/').length - a.split('/').length
      return depth === 0 ? b.length - a.length : depth
    })
  )

  let matched = $derived(
    spec.find(([href]) => {
      const dist = new URL(href, page.url.href)
      return page.url.href.startsWith(dist.origin + dist.pathname)
    })?.[0]
  )
</script>

{#each mapped as [href, label] (href)}
  <li>
    <a {href} data-current-location={href === matched ? true : null}>
      {#if children}
        {@render children(label)}
      {:else}
        {label}
      {/if}
    </a>
  </li>
{/each}

<style>
  li {
    display: contents;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
