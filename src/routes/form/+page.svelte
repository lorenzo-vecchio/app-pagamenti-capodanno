<script lang="ts">
    import type { PageData } from "./$types.js";
    import SettingsForm from "./settings/settings-form.svelte";

    export let data: PageData;
</script>

<div class="flex flex-col items-center justify-between lg:px-52 px-8 py-14 mb-80 sm:mb-40">
    <h1 class="font-bold text-lg lg:text-5xl">PROJECT <span class="text-transparent bg-clip-text bg-gradient-to-r from-customStart to-customEnd"> X</span></h1>
    <div class="flex flex-col items-center justify-evenly lg:justify-between w-full h-full lg:py-10 lg:pb-40 md:py-10">
        <h3 class="font-bold text-sm lg:text-xl uppercase mt-0">Raccontaci di te</h3>
        <SettingsForm data={data.form} />
    </div>
</div>