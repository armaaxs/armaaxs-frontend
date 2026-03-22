import { NextResponse } from "next/server";
import {
  getSupabaseServerClient,
  getWaitlistTableName,
} from "@/lib/supabase-admin";

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

  const source = payload?.source ?? "mimesis";

  try {
    const supabase = getSupabaseServerClient();
    const table = getWaitlistTableName();

    const { error: insertError } = await supabase.from(table).insert({
      email,
      source,
    });

    if (insertError) {
      if (insertError.code === "23505") {
        return NextResponse.json({
          ok: true,
          message: "You're already on the closed-beta list.",
          email,
          source,
        });
      }

      if (insertError.code === "42P01") {
        console.error(`Missing Supabase table "${table}" for Mimesis waitlist.`);

        return NextResponse.json(
          {
            ok: false,
            error:
              "The waitlist table has not been created in Supabase yet. Run the SQL in supabase/migrations/20260322_create_mimesis_waitlist.sql.",
          },
          { status: 500 }
        );
      }

      throw insertError;
    }

    return NextResponse.json({
      ok: true,
      message: "You're on the closed-beta list. We'll be in touch soon.",
      email,
      source,
    });
  } catch (error) {
    console.error("Failed to write Mimesis waitlist signup", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Waitlist signup is temporarily unavailable. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
