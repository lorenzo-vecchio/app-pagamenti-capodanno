<script lang="ts">
  import "../app.css";
  let { children } = $props();
  import { onMount } from "svelte";

  onMount(() => {
    document.documentElement.classList.add("dark");
  });
</script>

<svelte:head>
  <title>ProjectX</title>
</svelte:head>

{@render children()}
