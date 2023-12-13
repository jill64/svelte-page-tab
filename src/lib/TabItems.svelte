<script lang="ts">
  import { page } from '$app/stores'

  /** Map<href, label> */
  export let routes: Map<string, string>

  export let prefix = ''

  $: mapped = [...routes.entries()].map(([href, label]) => [prefix + href, label])

  $: spec = [...mapped].sort(([a], [b]) => {
    const depth = b.split('/').length - a.split('/').length
    return depth === 0 ? b.length - a.length : depth
  })

  $: matched = spec.find(([href]) => {
    const dist = new URL(href, $page.url.href)
    return $page.url.href.startsWith(dist.origin + dist.pathname)
  })?.[0]
</script>

{#each mapped as [href, label]}
  <li>
    <a {href} data-current-location={href === matched ? true : null}>
      <slot {label}>
        {label}
      </slot>
    </a>
  </li>
{/each}
