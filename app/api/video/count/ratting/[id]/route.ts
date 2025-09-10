import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const v = db.videos.find((x)=>x.id === params.id);
  if (!v) return new NextResponse("Not Found", { status: 404 });
  const body = await req.json().catch(()=>({}));
  const score = Number(body?.score ?? 5);
  const clamped = Math.max(1, Math.min(5, score));
  v.ratingSum += clamped;
  v.ratingCount += 1;
  return NextResponse.json({ id: v.id, rating: v.ratingSum / v.ratingCount, ratingCount: v.ratingCount });
}
