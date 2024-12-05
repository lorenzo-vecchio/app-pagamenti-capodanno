<script lang="ts">
  import Lottie from "$lib/components/Lottie.svelte";
  import projectx from "$lib/animations/projectx.json";
  import GradButton from "$lib/components/GradButton.svelte";
</script>

<svelte:head>
  <title>ProjectX</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
  <Lottie animationData={projectx} className="max-w-sm glow" />
  <GradButton>APPLY NOW</GradButton>
</div>

<style>
</style>
