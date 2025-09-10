import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const v = db.videos.find((x)=>x.id === params.id);
  if (!v) return new NextResponse("Not Found", { status: 404 });
  v.views += 1;
  return NextResponse.json({ id: v.id, views: v.views });
}
