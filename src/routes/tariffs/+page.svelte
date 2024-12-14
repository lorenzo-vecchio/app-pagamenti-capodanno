<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card/index";
</script>

<div class="flex flex-col h-screen md:px-3 lg:px-5">
    <div class="h-max">
        <h2 class="uppercase font-bold text-xl lg:text-4xl text-center py-5">
            Selezionare il metodo di pagamento
        </h2>
    </div>
    <div
        class="h-full flex flex-col lg:flex-row align-center lg:justify-center items-center gap-x-10 gap-y-4 overflow-y-auto"
    >
        <Card.Root
            class="w-1/2 lg:w-2/12 flex flex-col items-center text-center cursor-pointer"
        >
            <Card.Header>
                <Card.Title>Standard</Card.Title>
                <Card.Description>1 drink</Card.Description>
            </Card.Header>
            <Card.Content>
                <p class="text-4xl font-bold">10 €</p>
            </Card.Content>
        </Card.Root>
        <Card.Root
            class="w-1/2 lg:w-2/12 flex flex-col items-center text-center cursor-pointer"
        >
            <Card.Header>
                <Card.Title>Standard</Card.Title>
                <Card.Description>2 drink</Card.Description>
            </Card.Header>
            <Card.Content>
                <p class="text-4xl font-bold">15 €</p>
            </Card.Content>
        </Card.Root>
        <Card.Root
            class="w-1/2 lg:w-2/12 flex flex-col items-center text-center cursor-pointer"
        >
            <Card.Header>
                <Card.Title>Standard</Card.Title>
                <Card.Description>2 drink + cibo</Card.Description>
            </Card.Header>
            <Card.Content>
                <p class="text-4xl font-bold">20 €</p>
            </Card.Content>
        </Card.Root>
    </div>
    <div class="h-max flex flex-row align-center justify-between">
        <Button
            class="mt-3 mb-3 ml-3 lg:text-2xl lg:p-6 uppercase font-bold"
            href="/">Back</Button
        >
        <Button
            class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-white bg-gradient-to-r from-customStart to-customEnd uppercase integral-bold"
            >Submit</Button
        >
    </div>
</div>
