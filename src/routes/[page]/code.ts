export const code = /* html */ `
<script>
  import { TabItems } from "svelte-page-tab"
</script>

<ul>
  <TabItems
    prefix="/{page.params.page}"
    routes={new Map([
      ["", "Overview"],
      ["/section1", "Section 1"],
      ["/section2", "Section 2"],
      ["/section3", "Section 3"]
    ])}
  />
</ul>
`
