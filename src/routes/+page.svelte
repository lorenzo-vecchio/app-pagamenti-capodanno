<script lang="ts">
  import Lottie from "$lib/components/Lottie.svelte";
  import projectx from "$lib/animations/projectx.json";
  import GradButton from "$lib/components/GradButton.svelte";
  import { goto } from "$app/navigation";
</script>

<div
  class="relative flex flex-col items-center justify-center h-screen select-none"
>
  <div
    class="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-screen"
  >
    <p class="bigger-text font-bold text-gray-900 block font-black">31/12</p>
  </div>
  <Lottie animationData={projectx} className="max-w-sm glow z-1" />
  <div
    class="flex flex-col justify-center items-center p-5 mx-5 border rounded-xl border-2 max-w-4xl z-10"
  >
    <p
      class="font-bold text-xl text-center text-gray-400 bg-clip-text bg-gradient-to-r from-customStart to-customEnd mb-3"
    >
    Club’s <span class="text-transparent font-bold">vibes </span> + houseparty’s <span class="text-transparent font-bold">fun</span><br/>
    <span class="text-gray-300">
      Appartamenti, ville, loft: Location
      differente e divertimento costante 
    </span>
    </p>
    <GradButton
      class="mt-4 text-2xl p-6 bg-gradient-to-r from-customStart to-customEnd w-fit apply-now"
      href="/form">APPLY NOW</GradButton
    >
  </div>
</div>

<style>
  .bigger-text {
    font-size: 29vw;
    font-family: "IntegralCF", sans-serif;
    font-weight: 700;
  }
</style>
