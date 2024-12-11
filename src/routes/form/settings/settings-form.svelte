<script lang="ts">
  import * as Form from "$lib/components/ui/form/index";
  import { Input } from "$lib/components/ui/input/index";
  import { formSchema, type FormSchema } from "./schema";
  import type { Infer, SuperValidated } from "sveltekit-superforms";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
    parseDate,
    today,
    type DateValue,
  } from "@internationalized/date";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils";
  //import { buttonVariants } from "$lib/components/ui/button";
  import { Calendar } from "$lib/components/ui/calendar";
  import { CalendarIcon } from "lucide-svelte";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    taintedMessage: null,
  });

  const { form: formData, enhance } = form;

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let value: DateValue | undefined;

  $: value = $formData.dateOfBirth
    ? parseDate($formData.dateOfBirth)
    : undefined;

  let placeholder: DateValue = today(getLocalTimeZone());
</script>

<form method="POST" class="w-full" use:enhance>
  <div class="md:flex md:flex-col lg:flex lg:flex-row items-end gap-x-6">
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
  <Form.Field {form} name="dateOfBirth" class="flex flex-col">
    <Form.Control> <!--let:attrs-->
      <Form.Label>Date of birth <span class="text-destructive">*</span></Form.Label>
      <Popover.Root>
        <Popover.Trigger
          class={cn(
            buttonVariants({ variant: "outline" }),
            "w-[280px] justify-start pl-4 text-left font-normal",
            !value && "text-muted-foreground",
          )}
        ><!--{...attrs}-->
          {value
            ? df.format(value.toDate(getLocalTimeZone()))
            : "Date of birth"}
          <CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
        </Popover.Trigger>
        <Popover.Content class="w-auto p-0" side="top">
          <Calendar
            {value}
            bind:placeholder
            minValue={new CalendarDate(1900, 1, 1)}
            maxValue={today(getLocalTimeZone())}
            calendarLabel="Date of birth"
            initialFocus
            onValueChange={(v: any) => {
              if (v) {
                $formData.dateOfBirth = v.toString();
              } else {
                $formData.dateOfBirth = "";
              }
            }}
          />
        </Popover.Content>
      </Popover.Root>
      <Form.FieldErrors />
      <input hidden value={$formData.dateOfBirth} /> <!--name={attrs.name}-->
    </Form.Control>
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
