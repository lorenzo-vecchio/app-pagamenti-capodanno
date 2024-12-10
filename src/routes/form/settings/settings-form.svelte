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
  import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, today, type DateValue } from "@internationalized/date";
  import { Popover } from "bits-ui";
  import { cn } from "$lib/utils";
  import { buttonVariants } from "$lib/components/ui/button";
  import { Calendar } from "$lib/components/ui/calendar";
  import { CalendarIcon } from 'lucide-svelte';

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;

  const df = new DateFormatter("en-US", {
    dateStyle: "long"
  });
 
  let value: DateValue | undefined;
 
  $: value = $formData.dateOfBirth ? parseDate($formData.dateOfBirth) : undefined;
 
  let placeholder: DateValue = today(getLocalTimeZone());
</script>

<form method="POST" use:enhance>
  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end">

    <!-- FIRST NAME -->

    <Form.Field {form} name="name">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Your Name <span class="text-destructive">*</span></Form.Label>
          <Input placeholder="Name" {...props} bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <!-- LAST NAME -->

    <Form.Field {form} name="lastName">
      <Form.Control>
        {#snippet children({ props })}
          <Input placeholder="Last Name" {...props} bind:value={$formData.lastName} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <!-- DATE OF BIRTH -->


  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end">
    <!-- EMAIL -->
    <Form.Field {form} name="email">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>How can we contact you? <span class="text-destructive">*</span></Form.Label>
          <Input placeholder="Email" {...props} bind:value={$formData.email} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <!-- INSTAGRAM USERNAME -->
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
