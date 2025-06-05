import { NextResponse } from 'next/server';
import sendEmail from '@/app/actions/email/sendEmail';

export async function POST(request) {
    const { subject, body } = await request.json();
    try {
        console.log("sending email with subject:", subject)
        console.log("sending email with text:", body)
        await sendEmail(subject, body);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}