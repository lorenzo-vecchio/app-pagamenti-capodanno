<script lang="ts">
    import Lottie from "$lib/components/Lottie.svelte";
    import projectx from "$lib/animations/projectx.json";
</script>

<div
    class="flex flex-col items-center justify-center h-screen lg:gap-y-8 px-2 lg:px-8"
>
    <Lottie animationData={projectx} className="max-w-sm glow" />
    <p
        class="text-center uppercase text-white text-sm lg:text-xl font-black bg-clip-text bg-gradient-to-r from-customStart to-customEnd"
    >
        Your request has been <span class="text-transparent">saved !</span>
        <br />
        You will now receive
        <span class="text-transparent">a confirmation email.</span>
        <br />
        If <span class="text-transparent">selected</span>, you'll receive
        <span class="text-transparent">a second email</span>
        with all the
        <br />
        necessary details (location, times, and prices) .
        <br />
        <span class="text-transparent">Good luck !</span>
    </p>
</div>

<style>
</style>
