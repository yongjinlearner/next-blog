import { NextResponse } from "next/server";
import { getEmbedding, findTopMatches, generateReply } from "@/utils/chatbot";

export async function POST(request) {
  try {
    console.log("Chatbot request received");
    const { query } = await request.json();

    const queryEmbedding = await getEmbedding(query);
    const topMatches = findTopMatches(queryEmbedding);
    console.log("Top matches found:", topMatches);
    const reply = await generateReply(query, topMatches);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
