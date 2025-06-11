import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import cosineSimilarity from "cosine-similarity";
import Anthropic from "@anthropic-ai/sdk";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Load and parse embeddings from CSV
const messagesPath = path.join(process.cwd(), "lib", "all_cleaned_with_embeddings.csv");
const csvData = fs.readFileSync(messagesPath);
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
});

// Parse embedding strings into float arrays
const parsedMessages = records.map((row) => ({
  message: row.text,
  embedding: JSON.parse(row.embedding),
}));

// Get embedding for user query
export async function getEmbedding(text) {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: [text],
  });
  return res.data[0].embedding;
}

// Find top-N similar messages
export function findTopMatches(queryEmbedding, topN = 3) {
  const sims = parsedMessages.map((msg) => ({
    ...msg,
    score: cosineSimilarity(queryEmbedding, msg.embedding),
  }));
  return sims.sort((a, b) => b.score - a.score).slice(0, topN);
}

// Use OpenAI to generate a response
export async function generateReply(input, similarMessages) {
  const context = similarMessages.map((m) => `- ${m.message}`).join("\n");
    console.log("Context for OpenAI:", context);
  const prompt = `
    You are a chatbot that mimics Yongjin's style of speech based on the following messages:
    ${context}. Keep your response concise and relevant to the user's input, and under 50 words.
    Respond to: "${input}"`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;

}
