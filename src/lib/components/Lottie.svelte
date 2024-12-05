<script lang="ts">
    import { onMount } from 'svelte';

    let lottie: any;
    export let animationData: object;
    export let loop: boolean = true;
    export let autoplay: boolean = true;
    export let className: string = '';

    let container: HTMLDivElement;
    let animation: any;

    onMount(() => {
        // Define an async function inside onMount to handle async operations
        const loadAnimation = async () => {
            // Dynamically import lottie-web only on the client side
            lottie = (await import('lottie-web')).default;

            // Initialize the animation
            animation = lottie.loadAnimation({
                container,
                renderer: 'svg',
                loop,
                autoplay,
                animationData
            });
        };

        // Call the async function
        loadAnimation();

        // Return the cleanup function
        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    });
</script>

<div bind:this={container} class={className}></div>