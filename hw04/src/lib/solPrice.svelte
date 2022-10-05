<script lang="ts">
    interface ResponseInterface {
        [currency: string]: {
            [currency: string]: number;
        };
    }

    async function getSolToUSD() {
        const url =
            "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";
        const response = await fetch(url);
        const data: ResponseInterface = await response.json();
        return data.solana.usd;
    }

    const solToUSD: Promise<number> = getSolToUSD();
</script>

<div id="api-call" class="main-section">
    {#await solToUSD}
        <div class="heading4" id="sol-usd">Waiting...</div>
    {:then solToUSD}
        <div class="heading4" id="sol-usd">
            Here goes the conversion rate of Sol (a crypto currency) to USD: {solToUSD}
        </div>
    {:catch error}
        <div>Error loading</div>
    {/await}
</div>
