import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(process.env.GIPHY_API_KEY);

export async function GET(req) {
    try {
        // Fetch 10 trending GIFs
        const { data: gifs } = await gf.trending({ limit: 10 });
        return new Response(JSON.stringify(gifs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch GIFs' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}