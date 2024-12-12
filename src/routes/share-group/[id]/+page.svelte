<script lang="ts">
  import { base } from "$app/paths";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import type { PageData } from "./$types.js";
  import { Copy, Check } from "lucide-svelte";
  import { onMount } from 'svelte';

  export let data: PageData;

  let copied = false;
  let baseUrl = '';

  onMount(() => {
    baseUrl = window.location.origin;
  });

  function copyButtonClick() {
    navigator.clipboard.writeText(baseUrl + '/group/' + data.id);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
  <h1 class="font-bold text-lg lg:text-5xl mb-7 mx-4">INVITE YOUR FRIENDS!</h1>
  <h3 class="font-bold text-sm lg:text-xl uppercase mb-20 mx-4">
    Share this link with your friends to let them join your group
  </h3>

  <p class="text-gray-500 text-sm mb-3">{data.filled}/10 places already filled</p>
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div on:click={copyButtonClick}>
          <Button variant="secondary" class="inline-flex justify-start">
            {#if copied}
              <Check class='text-green-500' />
            {:else}
              <Copy />
            {/if}
            {baseUrl + '/gr...'}
          </Button>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Copy</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>

  <div class="flex flex-row">
    {data.creator}
  </div>
</div>
