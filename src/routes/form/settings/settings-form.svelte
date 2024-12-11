<script lang="ts">
  import * as Form from "$lib/components/ui/form/index";
  import { Input } from "$lib/components/ui/input/index";
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

<form method="POST" class="w-full" use:enhance>
  <div class="flex flex-col md:flex-row md:items-end gap-x-6">
    <!-- FIRST NAME -->

    <Form.Field class="lg:w-1/3" {form} name="name">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label
            >Your Name <span class="text-destructive">*</span></Form.Label
          >
          <Input placeholder="Name" {...props} bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <!-- LAST NAME -->

    <Form.Field class="lg:w-1/3" {form} name="lastName">
      <Form.Control>
        {#snippet children({ props })}
          <Input
            placeholder="Last Name"
            {...props}
            bind:value={$formData.lastName}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <!-- DATE OF BIRTH -->
  <Form.Field class="w-full lg:w-1/4" {form} name="dateOfBirth">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label
          >Date of birth <span class="text-destructive">*</span
          ></Form.Label
        >
        <Input type='date' {...props} bind:value={$formData.dateOfBirth} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end justify-between gap-x-6">
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
      <Form.FieldErrors />
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
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <Form.Button>Submit</Form.Button>
</form>
