import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function GET() {
  const items = db.bannerAds.filter(a=>a.imageUrl).map(a=>({ id:a.id, imageUrl:a.imageUrl!, link:a.link }));
  return NextResponse.json(items);
}
