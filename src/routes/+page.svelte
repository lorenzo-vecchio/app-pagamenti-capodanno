<script lang="ts">
  import Lottie from "$lib/components/Lottie.svelte";
  import projectx from "$lib/animations/projectx.json";
  import GradButton from "$lib/components/GradButton.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="relative flex flex-col items-center justify-center h-screen">
  <div class="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-screen">

    <!-- Visible on mid-sized devices and below -->
    <p class="bigger-text font-bold text-gray-900 block">31/12</p>
  </div>
  <Lottie animationData={projectx} className="max-w-sm glow z-1" />
  <div
    class="flex flex-col justify-center items-center p-5 mx-5 border rounded-xl border-2 max-w-4xl z-10"
  >
    <p
      class="text-xl text-center text-gray-500 bg-clip-text bg-gradient-to-r from-customStart to-customEnd mb-3"
    >
      Un <span class="text-transparent font-bold">nuovo concept</span> di eventi
      che unisce il divertimento di una
      <span class="text-transparent font-bold">discoteca</span>
      con le vibes di una
      <span class="text-transparent font-bold">festa in casa</span>.
      <span class="font-bold text-gray-300">Appartamenti, ville, loft:</span>
      la location cambia, ma il
      <span class="font-bold text-gray-300">divertimento</span> resta sempre la costante.
    </p>
    <GradButton
      class="mt-4 text-2xl p-6 bg-gradient-to-r from-customStart to-customEnd w-fit"
      href="/form">APPLY NOW</GradButton
    >
  </div>
</div>

<style>
  .big-text {
    font-size: 15vw;
    z-index: -1;
  }
  .bigger-text {
    font-size: 38vw;
  }
</style>
