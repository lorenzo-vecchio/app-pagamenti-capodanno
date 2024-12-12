<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import BrandIcon from "$lib/custom-icons/brand-icon.svelte";
  import type { PageData } from "./$types.js";
  import { Copy, Check } from "lucide-svelte";
  import { onMount } from "svelte";
  import { Mail } from "lucide-svelte";

  export let data: PageData;

  let copied = false;
  let baseUrl = "";

  onMount(() => {
    baseUrl = window.location.origin;
  });

  function copyButtonClick() {
    navigator.clipboard.writeText(baseUrl + "/group/" + data.id);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
  <h1 class="font-bold text-lg lg:text-5xl mb-7 mx-4 text-center">INVITE YOUR FRIENDS!</h1>
  <h3 class="font-bold text-sm lg:text-xl uppercase mb-20 mx-4 text-center">
    Share this link with your friends to let them join your group
  </h3>

  <p class="text-gray-500 text-sm mb-3">
    {data.filled}/10 places already filled
  </p>
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div on:click={copyButtonClick}>
          <Button variant="secondary" class="inline-flex justify-start">
            {#if copied}
              <Check class="text-green-500" />
            {:else}
              <Copy />
            {/if}
            {baseUrl + "/grou..."}
          </Button>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Copy</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>

  <div class="flex flex-row gap-3 mt-3">
    <!--{data.creator}-->

    <Button variant="secondary" class="p-2 h-auto" href={
      'whatsapp://send?text=' +
      encodeURIComponent(
        `You are invited to join ${data.creator}'s group for this New Year's party! Check it out here: ${baseUrl}/group/${data.id}`
      )
    }>
      <BrandIcon name="whatsapp" size="24" color="green" />
    </Button>

    <Button variant="secondary" class="p-2 h-auto" href={
      'mailto:' + 
      '?subject=' + encodeURIComponent('Invitation to Join New Year\'s Party') + 
      '&body=' + encodeURIComponent('You are invited to join ' + data.creator + '\'s group for this New Year\'s party! Check it out here: ' + baseUrl + '/group/' + data.id)
    }>
      <Mail />
    </Button>

    <Button variant="secondary" class="p-2 h-auto" href={
      'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent(
        `You are invited to join ${data.creator}'s group for this New Year's party! Check it out here: ${baseUrl}/group/${data.id}`
      )
    }>
      <BrandIcon name="x" size="24" color="white" />
    </Button>
  </div>
</div>
