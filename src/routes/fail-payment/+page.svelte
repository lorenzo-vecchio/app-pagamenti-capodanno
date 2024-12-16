<script lang="ts">
    import Lottie from "$lib/components/Lottie.svelte";
    import fail from "$lib/animations/fail.json";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div
    class="flex flex-col items-center justify-center h-screen lg:gap-y-8 px-2 lg:px-8"
>
    <Lottie animationData={fail} loop={false} className="w-16 h-16" />
    <p
        class="text-center uppercase text-white text-sm lg:text-xl font-black"
    >
        Qualcosa è andato storto !
        <br />
        Il pagamento <span class="text-red-500">non è stato</span> completato
    </p>
    <Button
        class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-black uppercase font-bold"
        href="/">Close</Button
    >
</div>