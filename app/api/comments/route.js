import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Comment from '@/schema/Comment';

export async function POST(request) {
  const { blogId, nickname, comment, gifId } = await request.json();
  await dbConnect();
  const newComment = await Comment.create({ blogId, nickname, comment, gifId });
  return NextResponse.json(newComment);
}

export async function GET(request) {
  await dbConnect();
  const comments = await Comment.find();
  console.log('Fetched comments:', comments);
  return NextResponse.json(comments);
}