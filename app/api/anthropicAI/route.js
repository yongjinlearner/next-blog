import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import prompt from "@/lib/aiPrompt"

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request) {
  try {
    const { userInput } = await request.json();
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: prompt[0],
      messages: [{ role: "user", content: userInput }],
    });

    return NextResponse.json({ response: msg.content[0].text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Claude API call failed" }, { status: 500 });
  }
}
