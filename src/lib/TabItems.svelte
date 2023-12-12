<script lang="ts">
  import { page } from '$app/stores'

  export let list: {
    href: string
    label: string
  }[]

  $: current = $page.url.origin + $page.url.pathname

  $: isCurrent = (href: string) => {
    const dist = new URL(href, $page.url.href)
    return current === dist.origin + dist.pathname ? true : null
  }
</script>

{#each list as { href, label }}
  <li>
    <a {href} data-current-location={isCurrent(href)}>
      <slot {label}>
        {label}
      </slot>
    </a>
  </li>
{/each}
