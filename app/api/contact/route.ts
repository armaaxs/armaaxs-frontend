import { NextResponse } from "next/server";
import {
  getContactTableName,
  getSupabaseServerClient,
} from "@/lib/supabase-admin";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = payload?.name?.trim();
  const email = payload?.email?.trim().toLowerCase();
  const projectType = payload?.projectType?.trim();
  const message = payload?.message?.trim();

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 }
    );
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!projectType) {
    return NextResponse.json(
      { ok: false, error: "Please choose a project type." },
      { status: 400 }
    );
  }

  if (!message || message.length < 12) {
    return NextResponse.json(
      { ok: false, error: "Please add a little more detail about your project." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const table = getContactTableName();

    const { error } = await supabase.from(table).insert({
      name,
      email,
      project_type: projectType,
      message,
      source: "contact-page",
    });

    if (error) {
      if (error.code === "42P01") {
        return NextResponse.json(
          {
            ok: false,
            error:
              "The contact table has not been created in Supabase yet. Run the SQL in supabase/migrations/20260322_create_contact_inquiries.sql.",
          },
          { status: 500 }
        );
      }

      throw error;
    }

    return NextResponse.json({
      ok: true,
      message: "Your inquiry is in. We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Failed to save contact inquiry", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Contact submissions are temporarily unavailable. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
