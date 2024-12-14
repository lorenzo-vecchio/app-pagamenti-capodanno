<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card/index";

    let tariffs: {
        title: string;
        description?: string;
        tariff: number;
        select: boolean;
    }[] = $state([
        {
            title: "Standard",
            description: "1 drink",
            tariff: 10,
            select: false,
        },
        {
            title: "Premium",
            description: "2 drink",
            tariff: 15,
            select: false,
        },
        {
            title: "Gold",
            description: "2 drink + cibo",
            tariff: 20,
            select: false,
        },
    ]);

    function tariffSelected(id: number) {
        tariffs.forEach((tariff, index) => {
            if (tariff.select) tariff.select = false;
            if (id == index) tariff.select = true;
        });
    }
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
        {#each tariffs as tariff, idx (idx)}
            <Card.Root
                class="w-1/2 lg:w-1/6 xl:w-52 flex flex-col items-center text-center cursor-pointer"
                style={tariff.select ? "background-color: #27272a;" : ""}
                onclick={() => {
                    tariffSelected(idx);
                }}
            >
                <Card.Header>
                    <Card.Title>{tariff.title}</Card.Title>
                    <Card.Description>{tariff.description}</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p class="text-4xl font-bold">{tariff.tariff} €</p>
                </Card.Content>
            </Card.Root>
        {/each}
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
