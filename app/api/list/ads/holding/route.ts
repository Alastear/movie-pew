import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function GET() {
  const items = db.holdingAds.map(a=>({ id:a.id, imageUrl:a.imageUrl!, link:a.link, position:a.position! }));
  return NextResponse.json(items);
}
