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
        La tua richiesta è stata <span class="text-transparent">salvata !</span>
        <br />
        Ora riceverai 
        <span class="text-transparent">una mail di conferma</span>
        <br />
        Se <span class="text-transparent">selezionato</span>, riceverai
        <span class="text-transparent">un'altra mail</span>
        con tutte le
        <br />
        informazioni necessarie (location, orari, e prezzi) .
        <br />
        <span class="text-transparent">Buona fortuna !</span>
    </p>
</div>

<style>
</style>
