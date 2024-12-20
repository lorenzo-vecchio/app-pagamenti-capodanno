<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card/index";

    let dates: {
        day: number;
        mounth: string;
        dayName: string;
        year: number;
        select: boolean;
        soldOut: boolean;
        available: boolean;
    }[] = $state([
        {
            day: 28,
            mounth: "Dicembre",
            dayName: "Sabato",
            year: 2024,
            select: false,
            soldOut: true,
            available: false,
        },
        {
            day: 31,
            mounth: "Dicembre",
            dayName: "Martedì",
            year: 2024,
            select: false,
            soldOut: false,
            available: true,
        },
        {
            day: 18,
            mounth: "Gennaio",
            dayName: "Sabato",
            year: 2025,
            select: false,
            soldOut: false,
            available: false,
        },
    ]); //28/12 grigio 18/01 rosso

    function dateSelected(id: number) {
        dates.forEach((tariff, index) => {
            if (tariff.select) tariff.select = false;
            if (id == index) tariff.select = true;
        });
    }
</script>

<div class="flex flex-col h-screen md:px-3 lg:px-5">
    <div class="h-max">
        <h2 class="uppercase font-bold text-xl lg:text-4xl text-center py-5">
            Scegli una data
        </h2>
    </div>
    <div
        class="h-screen flex flex-col lg:flex-row align-center lg:justify-center items-center gap-x-10 gap-y-4 overflow-y-auto"
    >
        {#each dates as date, idx (idx)}
            <div
                class="
                w-1/2 h-1/4 lg:h-1/5 xl:w-52 rounded-md
                {date.soldOut
                    ? 'bg-red-700'
                    : 'bg-gradient-to-r from-customStart to-customEnd'}
                p-1
                {date.select && date.available ? 'scale-110' : ''}
                {date.available ? '' : 'opacity-50'}
                "
            >
                <Card.Root
                    class="
                h-full w-full flex flex-col items-center text-center rounded-md
                {date.soldOut ? 'bg-red-700' : 'cursor-pointer'}
                border-none
                "
                    style={date.select && date.available ? "background-color: #27272a;" : ""}
                    onclick={() => {
                        if (date.available) dateSelected(idx);
                    }}
                >
                    <div
                        class="bg-clip-text bg-gradient-to-r from-customStart to-customEnd"
                    >
                        <Card.Header>
                            <Card.Title>
                                <span
                                    class="uppercase font-bold
                                    {date.soldOut ? '' : 'text-transparent'}"
                                >
                                    {date.day}
                                    {date.mounth}
                                </span>
                            </Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p
                                class="lg:text-3xl font-bold uppercase
                                {date.soldOut ? '' : 'text-transparent'}"
                            >
                                {date.dayName}{#if date.soldOut}<br><span class="text-xs">Sold out</span>{:else if !date.available}<br><span class="text-xs">Non disponibile</span>{/if}
                            </p>
                        </Card.Content>
                    </div>
                </Card.Root>
            </div>
        {/each}
    </div>
    <div class="h-max flex flex-row align-center justify-between">
        <Button
            class="mt-3 mb-3 ml-3 lg:text-2xl lg:p-6 uppercase font-bold"
            href="/">Indietro</Button
        >
        <Button
            class="mt-3 mb-3 mr-3 lg:text-2xl lg:p-6 text-white bg-gradient-to-r from-customStart to-customEnd uppercase integral-bold"
            >Conferma</Button
        >
    </div>
</div>
