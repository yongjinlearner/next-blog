import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const id = uuidv4();
    return new Response(JSON.stringify({ id }));
}
