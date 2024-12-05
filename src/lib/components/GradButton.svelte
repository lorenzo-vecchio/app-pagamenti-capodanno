<script lang="ts">
    import Button from "$lib/shadcn-components/ui/button/button.svelte";
    type Props = {
        children?: any;
        onClick?: () => {};
    };
    let props : Props = $props();
</script>

<Button class='bg-gradient-to-r from-customStart to-customEnd text-white font-bold py-2 px-4' on:click={() => props.onClick?.()}>
    {@render props.children()}
</Button>