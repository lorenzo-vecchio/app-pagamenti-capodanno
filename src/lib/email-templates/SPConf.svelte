<script lang="ts">
    import {
        Html,
        Head,
        Preview,
        Container,
        Section,
        Text,
    } from "svelty-email";
    import { preview } from "vite";

    export let firstName;

    const main = {
        backgroundColor: "black",
    };

    const container = {
        margin: "0 auto",
        padding: "20px 0 48px",
        backgroundColor: "#000000",
    };
</script>

<Html lang="it">
    <Head>
        <title>✨ Processo di Selezione Avviato | ProjectX 🎆</title>
        <meta
            name="description"
            content="🎆 La tua candidatura è in valutazione! Presto saprai se potrai partecipare alla festa di Capodanno più esclusiva dell'anno."
        />
        <meta http-equiv="content-type" content="text/html charset=UTF-8" />
    </Head>
    <Preview
        preview="🎆 La tua candidatura è in valutazione! Presto saprai se potrai partecipare alla festa di Capodanno più esclusiva dell'anno."
    />
    <Section style={main}>
        <Container style={container}>
            <Text>Ciao, {firstName}</Text>
            <Text>
                🎆 Grazie per il tuo interesse nella festa di Capodanno più
                esclusiva dell'anno! La tua candidatura è stata ricevuta e
                stiamo valutando la tua partecipazione. Al momento, sei entrato
                nel nostro processo di selezione: solo alcuni fortunati avranno
                l'opportunità di festeggiare con noi l'arrivo del 2025. 🎊 Cosa
                succede ora? Ti aggiorneremo nei prossimi giorni sull'esito
                della selezione. Nel frattempo, tieni d'occhio la tua casella
                email (e controlla lo spam, non si sa mai!). ✨ Rimani
                sintonizzato perché Capodanno si avvicina, e questa potrebbe
                essere un’esperienza indimenticabile. Grazie ancora per averci
                scelto,
                <br/>Il Team ProjectX
            </Text>
        </Container>
    </Section>
</Html>
