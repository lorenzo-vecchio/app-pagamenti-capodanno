<script lang="ts">
  import type { PageData } from "./$types.js";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { invalidate } from "$app/navigation";

  export let data: PageData;

  async function submitGroupForVerification() {
    const response = await fetch("/api/group/close", {
      method: "POST",
      body: JSON.stringify({ UUID: data.group.uuid }),
      headers: {
        "content-type": "application/json",
      },
    });
    const responsej = await response.json();
    invalidate("r:r");
  }
</script>

<div class="flex flex-col w-full items-center mt-10">
  <h1 class="font-bold text-lg lg:text-5xl mb-7 mx-4 text-center">
    {data.group.createdBy?.name + " " + data.group.createdBy?.lastName}'s group
  </h1>
  <h2 class="text-xl font-bold mb-3">Reason to be accepted:</h2>
  <p class="text-center mx-4 mb-20">{data.group.reason}</p>

  <div
    class="relative border rounded-lg w-11/12 flex flex-col items-center justify-center px-5"
  >
    <div class="absolute left-0 -top-7 text-gray-500 text-sm">
      {data.group.users.length}/10
    </div>
    <Accordion.Root type="single" class="w-full">
      <Accordion.Item value={data.group.createdBy?.uuid}>
        <Accordion.Trigger>
          <div class="flex flex-row justify-between w-full mr-2">
            {data.group.createdBy?.name + " " + data.group.createdBy?.lastName}
            {#if data.group.createdBy?.uuid === data.group.createdBy?.uuid}
              <Badge variant="default">Group Creator</Badge>
            {:else}
              <Badge variant="secondary">Group Member</Badge>
            {/if}
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <div class="grid grid-cols-2 gap-4 items-center mt-2">
            <p class="font-bold">Name:</p>
            <p>{data.group.createdBy?.name}</p>

            <p class="font-bold">Last Name:</p>
            <p>{data.group.createdBy?.lastName}</p>

            <p class="font-bold">Email:</p>
            <p>{data.group.createdBy?.email}</p>

            <p class="font-bold">Instagram:</p>
            <p>@{data.group.createdBy?.instagramUsername}</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      {#each data.group.users as user}
        {#if user.uuid !== data.group.createdBy?.uuid}
          <Accordion.Item value={user.uuid}>
            <Accordion.Trigger>
              <div class="flex flex-row justify-between w-full mr-2">
                {user.name + " " + user.lastName}
                <Badge variant="secondary">Group Member</Badge>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="grid grid-cols-2 gap-4 items-center mt-2">
                <p class="font-bold">Name:</p>
                <p>{user.name}</p>

                <p class="font-bold">Last Name:</p>
                <p>{user.lastName}</p>

                <p class="font-bold">Email:</p>
                <p>{user.email}</p>

                <p class="font-bold">Instagram:</p>
                <p>@{user.instagramUsername}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        {/if}
      {/each}
    </Accordion.Root>
  </div>

  {#if data.group.closed}
    <h2 class="mt-10">This group is closed and wating for verification.</h2>
  {:else}
    <div class="flex flex-row mt-10">
      <Button class='mr-20' href='/form?groupId={data.group.uuid}'>Add+</Button>
      <button on:click={submitGroupForVerification}>
        <Button class='text-white bg-gradient-to-r from-customStart to-customEnd uppercase integral-bold'>Submit for verification</Button>
      </button>
    </div>
  {/if}
</div>
