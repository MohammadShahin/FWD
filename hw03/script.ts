
interface Response {
    [currency: string]: {
        [currency: string]: number
    }
}

function handleClick() {
    alert("I said hover not click!")
}

async function getSolToUSD() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
    const response = await fetch(url)
    const data: Response = await response.json()
    return data.solana.usd
}

async function writeSolToUSD() {
    const value: number = await getSolToUSD()
    console.log(value)
    const element: HTMLElement | null = document.getElementById("sol-usd")
    if (element)
        element.innerText += ' ' + value.toString()
}

writeSolToUSD()
