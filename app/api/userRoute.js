import dbConnect from '@/lib/database';
import User from '@/schema/User';
import crypto from 'crypto';

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
    const id = crypto.randomUUID();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(JSON.stringify({ error: 'User already exists' }), {
            status: 409,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
        const user = await User.create({ id, email });

        return new Response(JSON.stringify(user), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error creating user:', error);

        return new Response(JSON.stringify({ error: 'Failed to create user' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
