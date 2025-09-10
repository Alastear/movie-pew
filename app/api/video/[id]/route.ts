import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const v = db.videos.find((x)=>x.id === params.id);
  if (!v) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(v);
}
