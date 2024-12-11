<script lang="ts">
    import type { PageData } from "./$types.js";
    import GradButton from "$lib/components/GradButton.svelte";
    import SettingsForm from "./settings/settings-form.svelte";

    export let data: PageData;
</script>

<div class="flex flex-col items-center justify-between h-screen lg:px-52 px-8 py-14 mb-80 sm:mb-0">
    <h1 class="font-bold text-lg lg:text-5xl">WHY SHOULD WE CHOOSE YOU?</h1>
    <div class="flex flex-col items-center justify-evenly lg:justify-between w-full h-full lg:py-14 lg:pb-40 md:py-10">
        <h3 class="font-bold text-sm lg:text-xl uppercase mt-4">Tell us a little more about yourself</h3>
        <SettingsForm data={data.form} />
    </div>
</div>