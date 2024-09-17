<script lang="ts">
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

// props
let { children } = $props();
</script>

{@render children()}