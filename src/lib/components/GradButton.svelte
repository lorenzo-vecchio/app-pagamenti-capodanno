<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    type Props = {
        children?: any;
        href?: string;
        class?: string;
    };
    let props : Props = $props();
</script>

<Button class='bg-gradient-to-r from-customStart to-customEnd text-white font-bold py-2 px-4 {props.class}' href={props.href}>
    {@render props.children()}
</Button>