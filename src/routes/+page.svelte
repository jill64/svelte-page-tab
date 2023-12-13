<script lang="ts">
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'
</script>

<div style:font-size="large" style:overflow-x="auto">
  <HighlightSvelte {code} />
</div>
