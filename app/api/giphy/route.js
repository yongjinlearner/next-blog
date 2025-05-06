import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(process.env.GIPHY_API_KEY)

// fetch 10 gifs
const { data: gifs } = await gf.trending({ limit: 10 })

export async function GET(req) {
    
}