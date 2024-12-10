<script lang="ts">
    import GradButton from "$lib/components/GradButton.svelte";
    import { z } from "zod";
</script>

<div class="flex flex-col items-center justify-between h-screen lg:px-10 px-8 py-20">
    <h1 class="font-bold text-lg lg:text-5xl">WHY SHOULD WE CHOOSE YOU?</h1>
    <div class="">
        <h3 class="font-bold text-sm lg:text-xl uppercase">Tell us a little more about yourself</h3>
    </div>
    <div class="flex flex-row justify-between w-full">
        <GradButton class='mt-4 lg:text-2xl lg:p-6 bg-neutral-800 uppercase' href='/'>Back</GradButton>
        <GradButton class='mt-4 lg:text-2xl lg:p-6 bg-neutral-800 uppercase' href='/'>Next</GradButton>
    </div>
</div>