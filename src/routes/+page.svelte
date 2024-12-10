<script lang="ts">
  import Lottie from "$lib/components/Lottie.svelte";
  import projectx from "$lib/animations/projectx.json";
  import GradButton from "$lib/components/GradButton.svelte";
  import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <Lottie animationData={projectx} className="max-w-sm glow" />
  <GradButton class='mt-4 text-2xl p-6' href='/form'>APPLY NOW</GradButton>
</div>

<style>
</style>
