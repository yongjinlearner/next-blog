// /app/api/blogs/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Blog from '@/schema/Blog';

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find({});
  console.log("Fetched blogs:", blogs);
  return NextResponse.json(blogs);
}