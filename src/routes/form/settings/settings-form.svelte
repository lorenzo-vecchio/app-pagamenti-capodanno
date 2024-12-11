<script lang="ts">
  import GradButton from "$lib/components/GradButton.svelte";
  import * as Form from "$lib/components/ui/form/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Switch } from "$lib/components/ui/switch";
  import { formSchema, type FormSchema } from "./schema";
  import type { Infer, SuperValidated } from "sveltekit-superforms";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<FormSchema>>;

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
            >Your Name <span class="text-destructive">*</span></Form.Label
          >
          <Input placeholder="Name" {...props} bind:value={$formData.name} />
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
            placeholder="Last Name"
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
          >Date of birth <span class="text-destructive">*</span></Form.Label
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
            >How can we contact you? <span class="text-destructive">*</span
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
            placeholder="Instagram Account"
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
  <Form.Field class="w-full flex flex-col" {form} name="isAlone">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label class='mb-3'
          >Are you a group? <span class="text-destructive">*</span></Form.Label
        >
        <div class="flex flex-row">
          No
          <Switch includeInput {...props} bind:checked={$formData.isAlone} class='mx-2' />
          Yes
        </div>
      {/snippet}
    </Form.Control>
    <div class="flex flex-row">
      <Form.FieldErrors class="text-transparent">c</Form.FieldErrors>
      <Form.FieldErrors />
    </div>
  </Form.Field>

  <div class="flex flex-row justify-between w-full fixed bottom-0 left-0 bg-background">
    <GradButton
      class="mt-3 mb-3 ml-3 lg:text-2xl lg:p-6 bg-neutral-800 uppercase"
      href="/">Back</GradButton
    >
    <Form.Button
      class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-black uppercase font-bold"
      >Submit</Form.Button
    >
  </div>
</form>
