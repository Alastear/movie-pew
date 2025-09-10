import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("search") || undefined;
  const tags = searchParams.getAll("tags");

  let items = db.videos;

  if (category) {
    const cat = db.categories.find(c=>c.slug===category);
    items = items.filter(v=>v.categoryId === cat?.id);
  }
  if (tags.length) {
    const tagIds = tags.map(slug => db.tags.find(t=>t.slug===slug)?.id).filter(Boolean);
    items = items.filter(v => tagIds.every(tid => v.tagIds.includes(tid as string)));
  }
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(v => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q));
  }

  const total = items.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const slice = items.slice(start, end);

  return NextResponse.json({ items: slice, page, limit, total });
}
