<script lang="ts">
    import Lottie from "$lib/components/Lottie.svelte";
    import success from "$lib/animations/success.json";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div
    class="flex flex-col items-center justify-center h-screen lg:gap-y-8 px-2 lg:px-8"
>
    <Lottie animationData={success} loop={false} stopFrame={11} />
    <p
        class="text-center uppercase text-white text-sm lg:text-xl font-black bg-clip-text bg-gradient-to-r from-customStart to-customEnd"
    >
        Perfetto !
        <br>
        Il pagamento è stato <span class="text-transparent">completato</span> !
    </p>
    <Button
        class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-black uppercase font-bold"
        href="/">Close</Button
      >
</div>

<style>
</style>