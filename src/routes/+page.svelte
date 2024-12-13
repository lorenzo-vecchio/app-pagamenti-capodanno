<script lang="ts">
  import Lottie from "$lib/components/Lottie.svelte";
  import projectx from "$lib/animations/projectx.json";
  import GradButton from "$lib/components/GradButton.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <Lottie animationData={projectx} className="max-w-sm glow" />
  <div class="flex flex-col justify-center items-center p-5 mx-5 border rounded-xl border-2 max-w-4xl">
    <p class="text-xl text-center text-gray-500 bg-clip-text bg-gradient-to-r from-customStart to-customEnd mb-3">
      Un nuovo <span class="text-transparent">concept</span> di eventi che unisce l’energia di una <span class="text-transparent">discoteca</span> con il divertimento informale di una <span class="text-transparent">festa in casa</span>. <span class="text-gray-400 font-bold">Dove?</span> Appartamenti, ville, loft o spazi eventi: la location cambia ogni volta, ma l’unica costante è il divertimento senza compromessi.
    </p>
    <GradButton
      class="mt-4 text-2xl p-6 bg-gradient-to-r from-customStart to-customEnd w-fit"
      href="/form">APPLY NOW</GradButton
    >
  </div>
</div>

<style>
</style>
