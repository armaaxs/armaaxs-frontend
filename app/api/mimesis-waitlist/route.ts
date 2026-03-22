import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as
    | { email?: string; source?: string }
    | null;

  const email = payload?.email?.trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the closed-beta list. We'll be in touch soon.",
    email,
    source: payload?.source ?? "mimesis",
  });
}
