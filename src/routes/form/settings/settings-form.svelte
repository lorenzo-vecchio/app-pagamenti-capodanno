<script lang="ts">
  import * as Form from "$lib/components/ui/form/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Switch } from "$lib/components/ui/switch";
  import { formSchema, type FormSchema } from "./schema";
  import type { Infer, SuperValidated } from "sveltekit-superforms";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/stores";
  import { Description } from "formsnap";
  $: paramsGroupId = $page.url.searchParams.get("groupId");

  // Import the data returned by the load function
  export let data: SuperValidated<Infer<FormSchema>>;

  // Initialize the form
  const form = superForm(data, {
    validators: zodClient(formSchema),
    taintedMessage: null,
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full mt-10 relative" use:enhance>
  <div class="flex flex-col md:flex-row md:items-end gap-x-6 mb-4">
    <!-- FIRST NAME -->
    <Form.Field class="lg:w-1/4" {form} name="name">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label
            >Il tuo Nome <span class="text-destructive">*</span></Form.Label
          >
          <Input placeholder="Nome" {...props} bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <div class="flex flex-row">
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
        <Form.FieldErrors />
      </div>
    </Form.Field>

    <!-- LAST NAME -->

    <Form.Field class="lg:w-1/4" {form} name="lastName">
      <Form.Control>
        {#snippet children({ props })}
          <Input
            placeholder="Cognome"
            {...props}
            bind:value={$formData.lastName}
          />
        {/snippet}
      </Form.Control>
      <div class="flex flex-row">
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
        <Form.FieldErrors />
      </div>
    </Form.Field>
  </div>

  <!-- DATE OF BIRTH -->
  <Form.Field class="w-full lg:w-1/4" {form} name="dateOfBirth">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label
          >Data di nascita <span class="text-destructive">*</span></Form.Label
        >
        <Input type="date" {...props} bind:value={$formData.dateOfBirth} />
      {/snippet}
    </Form.Control>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
      </div>
      <Form.FieldErrors />
    </div>
  </Form.Field>

  <div
    class="md:flex md:flex-col lg:flex lg:flex-row items-end justify-between gap-x-6 mb-4"
  >
    <!-- EMAIL -->
    <Form.Field class="w-full" {form} name="email">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label
            >Come ti possiamo contattare? <span class="text-destructive">*</span
            ></Form.Label
          >
          <Input placeholder="Email" {...props} bind:value={$formData.email} />
        {/snippet}
      </Form.Control>
      <div class="flex flex-row">
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
        <Form.FieldErrors />
      </div>
    </Form.Field>

    <!-- INSTAGRAM USERNAME -->
    <Form.Field class="w-full" {form} name="instagramUsername">
      <Form.Control>
        {#snippet children({ props })}
          <Input
            placeholder="Account Instagram"
            {...props}
            bind:value={$formData.instagramUsername}
          />
        {/snippet}
      </Form.Control>
      <div class="flex flex-row">
        <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
        <Form.FieldErrors />
      </div>
    </Form.Field>
  </div>

  <!-- IS ALONE -->

  <Form.Field
    class="w-full flex flex-col mb-4 {paramsGroupId ? 'invisible' : 'visible'}"
    {form}
    name="isGroup"
  >
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label class="mb-3"
          >Siete un gruppo? <span class="text-destructive">*</span></Form.Label
        >
        <div class="flex flex-row">
          No
          <Switch
            includeInput
            {...props}
            bind:checked={$formData.isGroup}
            class="mx-2"
          />
          si
        </div>
      {/snippet}
    </Form.Control>
    <div class="flex flex-row">
      <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
      <Form.FieldErrors />
    </div>
  </Form.Field>

  <!-- REASON -->
  <Form.Field
    class="w-full mb-20 {paramsGroupId ? 'invisible' : 'visible'}"
    {form}
    name="reason"
  >
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label class="mb-3"
          >Perchè dovresti venire?</Form.Label
        >
        <Textarea
          placeholder="Messaggio opzionale, incrementa le tue chance di essere selezionato"
          {...props}
          bind:value={$formData.reason}
        />
      {/snippet}
    </Form.Control>
    <Form.Description>
      {#if $formData.isGroup}
      Vista l’alta richiesta, non possiamo accettare tutti. Raccontaci quindi perché dovremmo scegliere proprio il tuo gruppo di amici!
      {:else}
      Vista l’alta richiesta, non possiamo accettare tutti. Raccontaci quindi perché dovremmo scegliere proprio te!
      {/if}
    </Form.Description>
    <div class="flex flex-row">
      <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
      <Form.FieldErrors />
    </div>
  </Form.Field>

  <!-- SUBMIT BUTTON -->

  <div
    class="flex flex-row justify-between w-full fixed bottom-0 left-0 bg-background"
  >
    {#if paramsGroupId}
      <Button
        variant="secondary"
        class="mt-3 mb-3 ml-3 lg:text-2xl lg:p-6 uppercase font-bold"
        href="/group/{paramsGroupId}">Back</Button
      >
    {:else}
      <Button
        variant="secondary"
        class="mt-3 mb-3 ml-3 lg:text-2xl lg:p-6 uppercase font-bold"
        href="/">Back</Button
      >
    {/if}
    <Form.Button
      class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-black uppercase font-bold"
      >Submit</Form.Button
    >
  </div>
</form>
