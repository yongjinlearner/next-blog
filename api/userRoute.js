import dbConnect from '@/lib/database';
import User from '@/models/User';

export async function GET(req, res) {
    await dbConnect();

    const users = await User.find({ email });

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req, res) {
    await dbConnect();

    const { email } = await req.json();

    const user = await User.create({ id, email });

    return new Response(JSON.stringify(user), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}