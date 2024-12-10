<script lang="ts">
    import type { PageData } from "./$types.js";
    import GradButton from "$lib/components/GradButton.svelte";
    import SettingsForm from "./settings/settings-form.svelte";

    export let data: PageData;
</script>

<div class="flex flex-col items-center justify-between h-screen lg:px-10 px-8 py-14">
    <h1 class="font-bold text-lg lg:text-5xl">WHY SHOULD WE CHOOSE YOU?</h1>
    <div class="flex flex-col justify-evently lg:justify-between h-full lg:py-24 md:py-10">
        <h3 class="font-bold text-sm lg:text-xl uppercase">Tell us a little more about yourself</h3>
        <SettingsForm data={data.form} />
    </div>
    <div class="flex flex-row justify-between w-full">
        <GradButton class='mt-4 lg:text-2xl lg:p-6 bg-neutral-800 uppercase' href='/'>Back</GradButton>
        <GradButton class='mt-4 lg:text-2xl lg:p-6 text-black uppercase' href='/'>Next</GradButton>
    </div>
</div>