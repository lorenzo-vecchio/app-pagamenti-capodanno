<script lang="ts">
    import { onMount } from 'svelte';

    let lottie: any;

    // Component props
    export let animationData: object;
    export let loop: boolean = true;
    export let autoplay: boolean = true;
    export let className: string = '';
    export let stopFrame: number | null = null; // Frame to stop at (optional)

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

            // Add listener to stop at a specific frame if stopFrame is defined
            if (stopFrame !== null) {
                animation.addEventListener('enterFrame', () => {
                    if (animation.currentFrame >= stopFrame) {
                        animation.pause();
                    }
                });
            }
        };

        // Call the async function
        loadAnimation();

        // Cleanup the animation on component destroy
        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    });
</script>

<div bind:this={container} class={className}></div>
