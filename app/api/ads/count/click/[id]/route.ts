import { NextRequest, NextResponse } from "next/server";

const clicks = new Map<string, number>();

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const k = params.id;
  clicks.set(k, (clicks.get(k) || 0) + 1);
  return NextResponse.json({ id: k, clicks: clicks.get(k) });
}
