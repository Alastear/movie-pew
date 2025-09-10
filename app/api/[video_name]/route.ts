import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: { video_name: string } }) {
  const { searchParams } = new URL(req.url);
  const categoryName = searchParams.get("categories_name") || undefined;
  const special = searchParams.get("special_for_search") || undefined;

  let items = db.videos;
  if (categoryName) {
    const cat = db.categories.find(c=>c.slug===categoryName || c.name.toLowerCase()===categoryName.toLowerCase());
    if (cat) items = items.filter(v=>v.categoryId === cat.id);
  }

  const slug = params.video_name;
  let v = items.find(x => x.slug === slug);
  if (!v && special) {
    // naive fallback: try special string presence in title
    const key = special.toLowerCase();
    v = items.find(x => x.title.toLowerCase().includes(key));
  }
  if (!v) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(v);
}
