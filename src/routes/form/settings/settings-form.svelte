<script lang="ts">
  import * as Form from "$lib/components/ui/form/index";
  import { Input } from "$lib/components/ui/input/index";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end">
    <Form.Field {form} name="name">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Your Name *</Form.Label>
          <Input placeholder="Name" {...props} bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="lastName">
      <Form.Control>
        {#snippet children({ props })}
          <Input placeholder="Lastname" {...props} bind:value={$formData.lastName} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Field {form} name="dateOfBirth">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Your Birthday *</Form.Label>
        <Input {...props} bind:value={$formData.dateOfBirth} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end">
    <Form.Field {form} name="email">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>How can we contact you? *</Form.Label>
          <Input placeholder="Email" {...props} bind:value={$formData.email} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="instagramUsername">
      <Form.Control>
        {#snippet children({ props })}
          <Input placeholder="Instagram Account" {...props} bind:value={$formData.instagramUsername} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button>Submit</Form.Button>
</form>
